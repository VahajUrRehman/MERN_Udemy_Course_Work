const express = require("express");

const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
  //   res.send("<h1>Hello World from Express Js</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>About Us</h1>");
  //   res.send("<h1>Hello World from Express Js</h1>");
});
app.get("/contact", (req, res) => {
  res.send("<h1>Contact US</h1>");
  //   res.send("<h1>Hello World from Express Js</h1>");
});

app.listen(port, () => {
  console.log(`Listening Port ${port}`);
});
