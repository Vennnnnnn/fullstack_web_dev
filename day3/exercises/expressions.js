let a = 8;
let b = 3;

console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus (Remainder)

console.log(a ==b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

console.log(a < b || a != b);
console.log(a == b || a > b);

console.log((4 + 5) * 9);
console.log(4 + 5 * 9);

// Section 2.3: Conditionals and Logic
console.log("Section 2.3: Conditionals and Logic - Mini Activity");
let score = 85;

if (score >= 80) {
    console.log("Distinction!");
} else if (score >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

let islate = false;

if (islate) {
    console.log("Submit with penalty");
}

console.log("Assignment: Simple Login Simulation");

// Declare a variable username and set it to "admin"
let username = "user";

// Declare a variable isLoggedIn set to true or false
let isLoggedIn = true;

// Write logic:
// If isLoggedIn and username is "admin", print: "Welcome back, Admin!"
// Else if isLoggedIn but not "admin", print: "Welcome, user."
// Else print: "Please log in."

let message = isLoggedIn ? username == "admin" ? "Welcome back, Admin!" :  "Welcome, user." : "Please log in.";

console.log(message);

