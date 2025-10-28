const express = require("express");
 const app = express();
 
 app.use(express.json());

function logger(req, res, next) {
   console.log(`logger message:${req.method} ${req.url}`);
   next(); // continue to the route handler
 }
 
 app.use(logger);

 app.get("/", (req, res) => {
   res.send("Welcome to my API!");
 });

 app.get("/about", (req, res) => {
   res.send("This is the about page.");
 });
 
 app.get("/users", (req, res) => {
   res.json([{ name: "Ali" }, { name: "Siti" }]);
 });

  app.get("/me", (req, res) => {
   res.json({name: "Shuven", role: "Student", hobbies:["Rock climbing", "Sleeping"]});
 });

   app.get("/me", (req, res) => {
   res.json({name: "Shuven", role: "Student"});
 });


  app.get("/hello", (req, res) => {
   res.json("Hello there!");
 });

 app.get("/home", (req, res) => {
   res.send("Welcome home!");
 });

 // 5.2.3 Route Parameters
 app.get("/user/:id", (req, res) => {
   const userId = req.params.id;
   res.send(`User ID: ${userId}`);
 });
 
 // 5.2.2 Route Methods
 // get = read/retrieve data
 // post = send/create data
 // put = update data
 // delete = remove data
 app.post("/submit", (req, res) => {
   res.send("Form submitted");
 });
 
// 5.2.4 Built-in Middleware: express.json()
// middleware is 

 app.post("/message", (req, res) => {
   const message = req.body.text;
   res.send(`You said: ${message}`);
 });

 app.listen(3000, () => {
   console.log("Server is running on http://localhost:3000");
 });