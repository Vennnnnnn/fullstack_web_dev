let promise = fetch("https://jsonplaceholder.typicode.com/posts/2");

promise
    .then(response => response.json()) //Parse the response as JSON

    .then(data => {
       //Log the post’s title and body
         console.log(`Title: ${data.title} \nBody: ${data.body}`);
    });