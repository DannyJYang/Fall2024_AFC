// 1. Declare a variable named `age` and assign it the value 25
let age = 25;
// 2. Declare a variable named `name` and assign it your name
let name = 'Danny'
// 3. Declare a variable named `isStudent` and assign it the value true
let isStudent = true
// 4. Reassign the value of `age` to 30
age = 30
// 5. Declare two variables `firstName` and `lastName`, and assign them values. Then, create a third variable `fullName` that concatenates both.
let firstName = "Danny"
let lastName = "Yang"
let fullName = `${firstName} ${lastName}`
// 6. Create an array named `colors` with the values 'red', 'green', and 'blue'
let colors = ['red' , 'green' , 'blue']
// 7. Access the first element of the `colors` array and assign it to a variable `firstColor`
let firstColor = colors[0];
// 8. Change the second element of the `colors` array to 'yellow'
colors[1] = 'yellow'
// 9. Add 'purple' to the end of the `colors` array
colors.push("purple");
// 10. Find the length of the `colors` array and assign it to a variable `colorsLength`
let colorsLength = colors.length;
// 11. Create an object named `person` with properties `name` (string), `age` (number), and `isStudent` (boolean)
let person = {
    name: "John Smith", 
    age: 25 ,
    isStudent: true
};
// 12. Access the `name` property of the `person` object and assign it to a variable `personName`
let personName = person.name;
// 13. Change the `age` property of the `person` object to 35
person.age = 35;
// 14. Add a new property `hobby` with the value 'reading' to the `person` object
person.hobby = "reading"
// 15. Delete the `isStudent` property from the `person` object
delete person.isStudent
// 16. Write an if statement that checks if `age` is greater than 18, and if so, log "Adult" to the console
// if (person.age > 18)
//     console.log("Adult")
// 17. Write an if-else statement that checks if `isStudent` is true, and if so, log "Student" to the console, otherwise log "Not a student"
console.log(person.isStudent == true ? 'Student' : 'Not a Student')
// 18. Write an if-else if-else statement that checks if `age` is less than 13, log "Child", if age is between 13 and 19 log "Teenager", otherwise log "Adult"
let checkWhatAgeGroup = person.age < 13 ? 'Child':
                        (person.age >= 13 && person.age <= 19) ? 'Teenager': 
                        'Adult';
console.log(checkWhatAgeGroup)
// 19. Write a condition using the logical AND operator to check if `age` is greater than 18 and `isStudent` is true, and if so, log "Adult Student"
if(person.age > 18 && person.isStudent == true)
    console.log("Adult Student")
// console.log(result)