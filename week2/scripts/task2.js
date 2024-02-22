/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const myname = 'Jackson';

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerHTML = myname;

// Step 3: declare and instantiate a variable to hold the current year
const current_year = 2024;

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').innerHTML = current_year;

// Step 5: declare and instantiate a variable to hold the name of your picture
const me_image = 'images/me.jpg';

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('#img').setAttribute('src', me_image);




/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let fav_foods = ['Shrimp', 'Pasta', 'Tacos'];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerHTML = fav_foods;

// Step 3: declare and instantiate a variable to hold another favorite food
const fav_food1 = 'Cookies';

// Step 4: add the variable holding another favorite food to the favorite food array
fav_foods.push(fav_food1);

// Step 5: repeat Step 2
document.querySelector('#food').innerHTML = fav_foods;

// Step 6: remove the first element in the favorite foods array
delete fav_foods[0];

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = fav_foods;

// Step 8: remove the last element in the favorite foods array
fav_foods.pop();

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = fav_foods;


