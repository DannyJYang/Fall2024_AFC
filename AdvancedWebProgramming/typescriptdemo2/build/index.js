"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let people = [
    {
        fname: "George",
        lname: "Clooney",
        isMarried: true,
        children: ["Ada", "Bobby"],
        getFullName: function () {
            return `${this.fname} ${this.lname}`;
        },
        getAge: function (doggy, horse) {
            return doggy * 10;
        }
    }
];
console.log(people);
console.log(people[0].getFullName());
console.log(people[0].getAge(34, "George"));
