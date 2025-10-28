const express = require("express");
const app = express();

app.use(express.json());

// ------- 5.3.2 Sample Data: In-Memory Array -------
// array object
let items = [
  {id: 1, name: "Pen"},
  {id: 2, name: "Notebook"},
];

// ------- 5.3.3 Create (POST) -------
// req = coming in, res = going out
app.post("/items", (req, res) => {
  const newItem = {
    id: Date.now(),
    name: req.body.name,
  };
  items.push(newItem);
  res.status(201).json(items); // its good to enforce the status code
});

// ------- 5.3.4 Read (GET) -------
app.get("/items", (req, res) => {
  res.json(items);
});

app.get("/items/:id", (req, res) => {
  const item = items.find((i) => i.id == req.params.id);
  if (!item) return res.status(404).send("Item not found");
  res.json(item);
});

// ------- 5.3.5 Update (PUT) -------
app.put("/items/:id", (req, res) => {
  const item = items.find((i) => i.id == req.params.id);
  if (!item) return res.status(404).send("Item not found");

  item.name = req.body.name;
  res.json(items);
});

// ------- 5.3.6 Delete (DELETE) -------
app.delete("/items/:id", (req, res) => {
  items = items.filter((i) => i.id != req.params.id); // whatever on right will assign to left
  //res.sendStatus(204); // No Content
  res.json(items);
});

// ------------------------------------

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
