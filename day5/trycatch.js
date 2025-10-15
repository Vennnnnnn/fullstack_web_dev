async function fetchPost(id) {
   try {
     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
     if (!res.ok) throw new Error(`Post not found. Status: ${res.status}`);
     
     const data = await res.json();
     console.log(data.title);
   } catch (err) {
     console.error("Error:", err.message);
     alert("Oops! Something went wrong while loading the post.");
   }
}
// console.log("First");
// fetchPost(1); // Valid ID
// console.log("Second");
// fetchPost(1000); // Invalid ID to trigger error handling
// console.log("Third");


////------------------------------------------------

async function checkUser(id) {
   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

   const user = await res.json();
   
   if (!res.ok) {
     console.error(`User not found. Status: ${res.status}`);
     return;
   }
   
   console.log(user.name);
   if (user.name === "Leanne Graham") {
     console.log("This is our VIP user.");
   } else {
     console.log("Standard user.");
   }
}

checkUser(1);
checkUser(20);