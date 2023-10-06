//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import express from "express";

let pass = false;
const port = 3000;

let __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(checkForPassword);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (pass) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log("Listining Port " + port);
});

function checkForPassword(req, res, next) {
  if (req.body["password"] === "ILoveProgramming") {
    pass = true;
  }
  next();
}
