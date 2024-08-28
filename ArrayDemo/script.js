let pets = ["Kat", "Doug", "Perry", 45];
console.log(pets);
pets.length = 5;  //increased the pet array length to 5. The last element is undeclared
pets.pop();  //removed the undeclared element on the position 4
console.log(pets);
let num = pets.length + 3;
console.log(pets[pets.length - 2]);
console.log(pets.toString()); //prints the array with commas separating the elements
console.log(pets.join(" + ")); //prints what is in the array but with " + " between each element
console.log("Index of Perry is " + pets.indexOf("Perry")); //what position is "Perry" located at

pets.push("Testing") //adds "Testing" to the end of the array
pets.pop()  //removes the last element in the array - which is testing
pets.unshift("First item?") //Adds an element at the beginning of the array
console.log(pets)

let numbers = [1, 2, "3", 4, 5];
let numberClone = numbers.slice(); //slice without any numbers EX: slice(1,2) copies the whole array. if we do slice(1,2), it will copy from position 1 -inclusive and end at position 3 -not inclusive

for (let i = 0; i < numbers.length; i++) numbers[i] *= 2;
console.log(numbers);

numbers.forEach((numbers) => { //for each loop
  console.log(numbers);
});

let square = numbers.map((num) => num * num);
console.log(square);

let pet2 = ["moxxi", "Pickle", "Hootchie"]
console.log(pet2.sort());

let numbers2 = [100, 10, 4, 1, 3]
let newNumbers = numbers2.sort((a,b) => a-b)
console.log(newNumbers);

let example = ["          oh lord", 'testword', 'short', 'yikes']
let longWords = example.filter(el => el.length > 5)

let person = {
  fName: "George",
  lName: "Orwell",
  age: 78,
  married: true,
  family: ["Johhny", "Boy", "Something"],
  fullName: function () {
    return `${this.fName} ${this.lName}`;
  },
  animals: [
    {
        deadly: true,
        type: 'snake'
    },
    {
        deadly: false,
        type: 'Kitten'
    }
  ]
};
console.log(person.family[person.family.length - 1]);
console.log(person.fullName());
console.log(person.animals[1].type)  //same as below
console.log(person["animals"][1]["type"])  //same as above
