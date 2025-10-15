// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then(response => response.json())
//   .then(data => console.log(data));

//// A Promise is an object representing the eventual result of an asynchronous operation.

//// It can be in 3 states:
//// Pending:     still running
//// Fulfilled:   completed successfully
//// Rejected:    failed (e.g., no internet, wrong URL)

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//    .then(response => response.json()) // parse JSON from response
//    .then(data => {
//      console.log(data);
//    });

////------------------------------------------------
// let promise = fetch("https://jsonplaceholder.typicode.com/users/1");

// promise
//   .then((response) => response.json())
//   .then((response) => {
//     console.log("Response received:", response);
//   });

////------------------------------------------------
//// Real-World Example: convert to let promise method
////------------------------------------------------
// fetch("https://jsonplaceholder.typicode.com/users")
//    .then(res => res.json())
//    .then(users => {
//      users.forEach(user => {
//        console.log(`${user.name} (${user.email})`);
//      });
//    });

////------------------------------------------------
//// Real-World Example Answer:
////------------------------------------------------
let promise = fetch("https://jsonplaceholder.typicode.com/users");

console.log("Before promise");

promise
    .then((res) => res.json())
    .then((users) => { 
        users.forEach(user => {
            console.log(`${user.name} (${user.email})`);
        });
    });
//------------------------------------------------

console.log("After promise");