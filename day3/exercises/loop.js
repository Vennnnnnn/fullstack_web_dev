console.log("-- Loop Exercises --\n Question 1: Print numbers from 1 to 10");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("\n Question 2: Print even numbers from 1 to 20");
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

console.log("\n Question 3: Use a while loop to count down from 5 to 1");
let count = 5;
while (count >= 1) {
    console.log(count);
    count--;
}

console.log("\n Question 4: Use a do-while loop to print 'Hello' 3 times");
let helloCount = 0;
do {
    console.log("Hello");
    helloCount++;
} while (helloCount < 3);

// "Fizz" if the number is divisible by 3
// "Buzz" if divisible by 5
// "FizzBuzz" if divisible by both
// The number if divisible by neither
console.log("\n Question 5: FizzBuzz from 1 to 30");
for (let i = 1; i <= 30; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}