// Write a function sayHello() that prints a greeting
function sayHello() {
    console.log("Hello!");
}

// Write a function square(num) that returns the square of a number
function square(num) {
    return num * num;
}

// Write an arrow function isEven(n) that returns true if n is even
const isEven = (n) => {return n % 2 == 0}
// const isEven = n => n % 2 == 0; also can

// constant expression
let isOdd = function(n) {return n % 2 != 0;}

console.log("Testing sayHello:");
sayHello(); 

console.log("Testing square:");
console.log(square(4)); 
console.log(square(5)); 

console.log("Testing isEven:");
console.log(isEven(5));

// greet(name) – prints a greeting
const greet = (name) =>{
    console.log("Hello, " + name + "!");
}

// toCelsius(fahrenheit) – converts Fahrenheit to Celsius
const toCelsius=(fahrenheit) =>{
    return (fahrenheit - 32) * 5 / 9;
}

// isAdult(age) – returns true if age ≥ 18
const isAdult=(age)=> {
    return age >= 18;
}

// randomBetween(min, max) – returns a random number between min and max
const randomBetween=(min, max)=> {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.random(min,max) * (max - min) + min;
}

console.log("\n\nTesting greet:");
greet("Alice");

console.log("\n\nTesting toCelsius:");
console.log(toCelsius(100));

console.log(toCelsius(32));

console.log("\n\nTesting isAdult:");
console.log(isAdult(20));
console.log(isAdult(16));

console.log("\n\nTesting randomBetween:");
console.log(randomBetween(1, 10));
console.log(randomBetween(5, 15));

