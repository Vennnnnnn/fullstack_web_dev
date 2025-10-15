// same as PROMISE but written in different manner

// benefits: cleaner code, easier to read and understand

// ----------------------------------------------------
// AWAIT MUST USE WITH ASYNC FUNCTION
// ----------------------------------------------------
// 1. async function always returns a promise
// 2. await makes JS wait until that promise settles and returns its result

async function getData() {
  //     console.log("Fetching data...");
  //    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  //    const data = await response.json();
  //    console.log(data.title);
  //    console.log("After fetching data.");

  await fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

getData();
