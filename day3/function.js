// A function is a reusable block of code designed to perform a particular task.
// A function is executed when "something" invokes it (calls it).

// Function Expression
const add = function(a, b) {
    return a + b;
};

// Arrow Function
const multiply = (a, b) => a * b;

// Invoking the functions
console.log(add(5, 3));      // Output: 8
console.log(multiply(4, 2)); // Output: 8

// Function with default parameters
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}

console.log(power(3));       // Output: 9 (3^2)
console.log(power(2, 3));    // Output: 8 (2^3)

let x = 1
function addOne() {
    x +=1;
}
addOne()
addOne()
addOne()

console.log("addOne total: " + x) // 4

// arguments object
function sumAll() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log("sumAll: " +sumAll(1, 2, 3, 4,5,6,7,8,9,10)); // Output: 10

// Rest parameters
function sumRest(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumRest(1, 2, 3, 4)); // Output: 10

// IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("This function runs immediately!");
})();

// Function as first-class citizens
function callFunction(fn, value) {
    return fn(value);
}

const square = x => x * x;
console.log(callFunction(square, 5)); // Output: 25

// Recursive function
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120

// Function scope
function scopeTest() {
    let localVar = "I'm local";
    console.log(localVar);
}

scopeTest();
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined

// Closures
function makeCounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    };
}

const counter = makeCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

// Method in an object
const obj = {
    name: "My Object",
    getName: function() {
        return this.name;
    }
};

console.log(obj.getName()); // Output: My Object

// Using 'this' in different contexts
const person = {
    name: "John",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

person.greet(); // Output: Hello, John

const greetFunc = person.greet;
greetFunc(); // Output: Hello, undefined (or error in strict mode)

// Using bind to set 'this'
const boundGreet = person.greet.bind(person);
boundGreet(); // Output: Hello, John