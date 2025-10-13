// Create a file students.js:
// Define an array students containing 3 objects, each with:

// name (string)
// age (number)
// isEnrolled (boolean)
let students = [
  {name: "John", age: 20, isEnrolled: true},
  {name: "Jane", age: 22, isEnrolled: false},
  {name: "Jim", age: 19, isEnrolled: true},
];

// Log all student names
console.log("All students:");
students.forEach((student) => console.log(student.name));

// or arrow function
// students.forEach(({name}) => console.log(name));

// Log only those who are enrolled
console.log("Enrolled students:");
students.filter((student) => student.isEnrolled).forEach((student) => console.log(student.name));

//if stattement
// students.forEach(student => {
//     if (student.isEnrolled) {
//         console.log(student.name);
//     }
// });

// Add a new student using .push()
students.push({name: "Jake", age: 21, isEnrolled: true});
console.log("After adding a new student:");
students.forEach((student) => console.log(student.name));

// Remove one student using .pop()
students.pop();
console.log("After removing the last student:");
students.forEach((student) => console.log(student.name));
