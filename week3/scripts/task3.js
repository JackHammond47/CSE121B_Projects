/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2

// Step 2: In the function, return the sum of the parameters number1 and number2

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function


// Step 4: Assign the return value to an HTML form element with an ID of sum

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
function add(number1, number2){
    let total = number1 + number2;
    return total;
}

function addNumbers(){
    const addend1 = parseInt(document.querySelector('#addend1').value);
    const addend2 = parseInt(document.querySelector('#addend2').value);
    let total = add(addend1, addend2);
    document.querySelector('#sum').value = total;
}

const addButtonElement = document.querySelector('#addNumbers');
addButtonElement.addEventListener('click', addNumbers);


// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function sub(number1, number2){
    let total = number1 - number2;
    return total;
}

function subNumbers(){
    const num1 = parseInt(document.querySelector('#minuend').value);
    const num2 = parseInt(document.querySelector('#subtrahend').value);
    let total = sub(num1, num2);
    document.querySelector('#difference').value = total;
}

const subButtonElement = document.querySelector('#subtractNumbers');
subButtonElement.addEventListener('click', subNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
function mult(number1, number2){
    let total = number1 * number2;
    return total;
}

function multNumbers(){
    const num1 = parseInt(document.querySelector('#factor1').value);
    const num2 = parseInt(document.querySelector('#factor2').value);
    let total = mult(num1, num2);
    document.querySelector('#product').value = total;
}

const multButtonElement = document.querySelector('#multiplyNumbers');
multButtonElement.addEventListener('click', multNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function div(number1, number2){
    let total = number1 / number2;
    return total;
}

function divNumbers(){
    const num1 = parseInt(document.querySelector('#dividend').value);
    const num2 = parseInt(document.querySelector('#divisor').value);
    let total = div(num1, num2);
    document.querySelector('#quotient').value = total;
}

const divButtonElement = document.querySelector('#divideNumbers');
divButtonElement.addEventListener('click', divNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const currentDate = new Date();

// Step 2: Declare a variable to hold the current year
let currentYear;

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
currentYear = currentDate.getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector('#year').innerHTML = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const numList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector('#array').innerHTML = numList;
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
function getOdds(num){
    return (num % 2 === 1);
}
let odds = numList.filter(getOdds);
document.querySelector('#odds').innerHTML = odds;
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
function getEvens(num){
    return (num % 2 === 0);
}
let evens = numList.filter(getEvens);
document.querySelector('#evens').innerHTML = evens;
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
function sum(total, num){
    return total + num;
}
document.querySelector('#sumOfArray').textContent = numList.reduce(sum);

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const map1 = numList.map((x) => x * 2);
document.querySelector('#multiplied').innerHTML = map1;
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.querySelector('#sumOfMultiplied').innerHTML = map1.reduce(sum);