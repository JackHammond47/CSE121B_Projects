document.querySelector('#submit').addEventListener('click', async function(event){
    event.preventDefault();
    let pokemonType = document.querySelector('#pokemonType').value;
    const response =  await fetch(`https://pokeapi.co/api/v2/type/${pokemonType}`);
    const data = await response.json();
    populateTable(data, pokemonType);
});
function populateTable(data, pokemonType){
    const typeNameCell = document.getElementById('typeNameCell');
    typeNameCell.textContent = pokemonType

    const effectivenessData = data.damage_relations;

    const resistantToCell = document.getElementById('resistantToCell');
    let resistantTypes = [];
    if (effectivenessData.no_damage_from) {
        resistantTypes = resistantTypes.concat(effectivenessData.no_damage_from);
    }
    if (effectivenessData.half_damage_from) {
        resistantTypes = resistantTypes.concat(effectivenessData.half_damage_from);
    }
    resistantToCell.textContent = resistantTypes.map(function(type) {
        return type.name;
    }).join(', ');
    
    const weakToCell = document.getElementById('weakToCell');
    if (effectivenessData.double_damage_from) {
        weakToCell.textContent = effectivenessData.double_damage_from.map(function(type) {
            return type.name;
        }).join(', ');
    } else {
        weakToCell.textContent = 'N/A';
    }
    
    const superEffectiveCell = document.getElementById('superEffectiveCell');
    if (effectivenessData.double_damage_to) {
        superEffectiveCell.textContent = effectivenessData.double_damage_to.map(function(type) {
            return type.name;
        }).join(', ');
    } else {
        superEffectiveCell.textContent = 'N/A';
    }

    const notVeryEffectiveCell = document.getElementById('notVeryEffectiveCell');
    let notVeryEffectiveTypes = [];
    if (effectivenessData.no_damage_to) {
        notVeryEffectiveTypes = notVeryEffectiveTypes.concat(effectivenessData.no_damage_to);
    }
    if (effectivenessData.half_damage_to) {
        notVeryEffectiveTypes = notVeryEffectiveTypes.concat(effectivenessData.half_damage_to);
    }
    notVeryEffectiveCell.textContent = notVeryEffectiveTypes.map(function(type) {
        return type.name;
    }).join(', ');
    
}