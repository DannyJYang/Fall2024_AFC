//here is an array of strings
let dogArray = ["Doug", "Baker", "Chicken"];
//array of numbers
let numDogArray = [10, 12, 18];
let movieArr: object[] = [];


//function
// data types for params and args
// data types for returned values

const getAge = (num:number, fname: string = "JM", isMarried:boolean = false): number => {
    return num * 4;
}

let result = getAge(10);
console.log(result);