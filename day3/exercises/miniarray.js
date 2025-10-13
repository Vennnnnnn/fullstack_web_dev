// Create an array of 5 of your favorite movies.
let movies = ["Inception", "The Matrix", "Interstellar", "The Dark Knight", "Pulp Fiction"];

// Log the first and last movie.
console.log("First movie:", movies[0]);
console.log("Last movie:", movies[movies.length - 1]);

// Use push() to add one, and pop() to remove one.
movies.push("Fight Club");
console.log("After push:", movies);
movies.pop();
console.log("After pop:", movies);

// Create an object profile with your name, age, and an array of 3 hobbies.
let profile = {
    name: "John Doe",
    age: 20,
    hobbies: ["reading", "gaming", "hiking"]
};

// Log your second hobby.
console.log("Second hobby:", profile.hobbies[1]);

