// example 1


const steps = ["one", "two", "three"];
const stepsHtml = steps.map(function (step) {
  return `<li>${step}</li>`;
});
document.getElementById("myList").innerHTML = stepsHtml.join();
console.log(steps);
console.log(stepsHtml);

// example 2
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);
console.log(gpaPoints)

//reduce methods - reduce array down to 1 value

const pointsT = gpaPoints.reduce(function (total, item) {
  return total + item;
});
const gpa1 = pointsT / gpaPoints.length;
console.log(gpa1.toFixed(2))

// example 2
// this is the same thing as above, but with an arrow function
const pointsTotal = gpaPoints.reduce((total, item) => total + item);
const gpa2 = pointsTotal / gpaPoints.length;

// this could be further simplified as
const gpa3 = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

//filter - take items in array and assign to a new array only if pass a new condition
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(function (word) {
  return word.length < 6;
});
console.log(shortWords)

//same thing with an arrow function
// const shortWords = words.filter((word) => word.length < 6);

//events

const buttonElement = document.getElementById("submitButton");

function copyInput() {
  const inputElement = document.getElementById("inputBox");
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = inputElement.value;
}
buttonElement.addEventListener("click", copyInput);