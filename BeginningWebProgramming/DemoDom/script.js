// alert("Connected")

let food = document.getElementById("fruit");
console.log(food); //returns apple pound cake
food.style.color = "red"; //you can change element properties through JS. Must use camelCase.
food.style.border = "green dotted 15px";
food.style.fontSize = "36px";
let food2 = document.getElementsByClassName("breakfast");
console.log(food2[1]); //returns chocolate chunk brownie
console.log(food2); //returns both breakfast in an array like format

let food3 = document.getElementsByTagName("li");
// console.log(food3[0]);  // returns apple pound cake
console.log(food3[1].textContent);
food3[1].textContent = "I used to be cinnamon morning bun but now I am sad";

//to use query selector, I must query it properly and use # to call that ID. It will return the first object that matches.
let food4 = document.querySelector(".breakfast");
console.log(food4); //returns only cinnamon morning bun

let food5 = document.querySelectorAll("h1");
console.log(food5[1]); //returns Apple cider donuts

let ul = document.querySelector("ul");
console.log(ul);
let li = document.querySelector("li");
li.innerHTML = "<b><i><u> Delicious Christmas Cookies</u></i></b>";

console.log(document.querySelector("a").getAttribute("href"));
document.querySelector("a").getAttribute("href", "http://www.amazon.com");

let input = document.querySelectorAll("input");
// inputBox[0].setAttribute("type", "password");
console.log(input[0].value);

//event listener
let submitButton = document.querySelector('button[type="submit"]');
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  // let fname = input[0].value;
  // let lname = input[1].value;
  // let age = input[2].value;
  let person = {
    fname: input[0].value,
    lname: input[1].value,
    age: input[2].value,
  };
  let strPerson = JSON.stringify(person);
  console.log(strPerson);
  console.log(`The combined powerful name is ${person.fname} ${person.lname} age ${person.age}`);
  input[0].value = "";
  input[1].value = "";
  input[2].value = "";
});
