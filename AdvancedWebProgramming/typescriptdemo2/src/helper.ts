//I moved the type in here so it won't have to be in the index file when it is compiled
type Person = {
    fname: string;
    lname: string;
    isMarried?: boolean;  //isMarried is made optional with the ?
    children: any[];
    getFullName?: () => string;
    getAge: (num: number, fname: string) => number;
}



export {Person}