var x = 5;      //ECMAScript (Essential Javascript) 4
let y = 10;    //ES5+

console.log(x + y);

let myName = "Shuven";

console.log("My name is " + myName);

myName = "John";

console.log("My name is " + myName);

console.log(x * x);

console.log(x + " times " + x + " = " + (x * x));

// Data types
    // primitives: number, string, boolean, null, undefined, symbol (ES6+), bigint (ES11+)
    // non-primitives: object (represented by {}), array (represented by []), function, ...)

let distance = 5.5;
let goThere = true;

console.log("Distance: " + distance + ", Go there: " + goThere);

console.log("Distance type: " + typeof(distance));
console.log("goThere type: " + typeof(goThere));
console.log("myName type: " + typeof(myName));
console.log(typeof(x));

// array
let students = ["John", "Jane", "Doe"];
console.log(students);
console.log("First student: " + students[0]);

// object
let person = {name: "John", age: 30, isMarried: false, height: 5.9, hobbies: ["reading", "traveling"]};
console.log(person);
console.log(person.name + "'s name: " + person.name);
console.log(person.name + "'s hobbies: " + person.hobbies[1]);

let details = [
    {name: "John", age: 30},
    {name: "Jane", age: 25},
    {name: "Doe", age: 35}
];

console.log(details);