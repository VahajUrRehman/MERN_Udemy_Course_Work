const express = require("express");

const app = express();

const port = 5000;

// app.get("/", (req, res) => {
//   res.send("<h1>Home Page</h1>");
//   //   res.send("<h1>Hello World from Express Js</h1>");
// });
// app.get("/about", (req, res) => {
//   res.send("<h1>About Us</h1>");
//   //   res.send("<h1>Hello World from Express Js</h1>");
// });
// app.get("/contact", (req, res) => {
//   res.send("<h1>Contact US</h1>");
//   //   res.send("<h1>Hello World from Express Js</h1>");
// });

// app.listen(port, () => {
//   console.log(`Listening Port ${port}`);
// });

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
  //Do something with the data
  res.sendStatus(201);
});

app.put("/user/vahaj", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/vahaj", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/vahaj", (req, res) => {
  //Deleting
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
