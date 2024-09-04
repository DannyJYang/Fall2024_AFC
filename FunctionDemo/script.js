// function syntax
// named function
function nameOfFunction() {
  //code goes here!
  //console.log("I am function");
}
//to run function, we call it or invoke it
nameOfFunction();

// function to say hello
// function greeting() {
//   console.log("Hello");
//   //return true;
// }
// greeting();

//function that has parameters
// function area(length, width) {
//   return length * width;
// }
// let result = area(2,3); //2,3 are the arguments
// console.log(result);

//setting default values to parameters
// function areaOfRectangle(length = 5, width = 5) {
//     return length * width;
// }
// console.log(areaOfRectangle()); //default values
// console.log(areaOfRectangle(6,6)); //my paremeters
// console.log(areaOfRectangle(6)); //changing length to be 6 but width is still 5
// console.log(areaOfRectangle(undefined,6)); //keeping length 5 bu changing width to be 6

//anonymous functions do not have names
// (function () {
//   console.log("Are you here with us?");
// })();

// named function
// function pluralize(element) {
//   console.log(element + "'s");
// }

// let animals = ["Bear", "Dog", "Owl"];
// animals.forEach(function (beast) {  //anonymous function is inside the forEach function
//   console.log(beast + "'s");
// });
// animals.forEach(pluralize); //notice how there are no parantheses for pluralize function inside the forEach loop. It is already expecting a callback function, therefore do not have to invoke it.

// fat arrows functions
// function greeting1() {
//   console.log("Hello");
// }

// let greeting2 = () => {
//   console.log("Hello");
// };

// greeting1();
// greeting2();

// let area = (length, width) => {
//   return length * width;
// };
// let area = (length = 5, width = 5) => length * width;

// let area = (length = 5, width = 5) => (
//     console.log('I am doubling the length'),
//     2 * length * width
// );
// console.log(area(4, 8));

// let greeting = (arg) => `Hello, ${arg}`;
// console.log(greeting("help"));

let animals = ["Bear", "Owl", "Zebra"];
let multiples = (animals) => {
  let newAnimal = [];
  animals.forEach((el) => newAnimal.push(el + "'s"));
  return newAnimal;
};
let manyAnimals = multiples(animals);
console.log(animals);
console.log("The last animal is: " + manyAnimals[manyAnimals.length - 1]);

