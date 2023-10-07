// import express from "express";

// const app = express();
// const port = 5000;

// app.get("/", (req, res) => {
//   app.render("index.ejs", {
//     dayType: "a weekday",
//     advice: "Its Timee To Work Hard",
//   });
// });

// app.listen(port, () => {
//   console.log(`Server Running On Port ${port}`);
// });

import express from "express";
import path from "path";

const app = express();
const port = 5000;

// Set the view engine to EJS
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const d = new Date();
  let day = d.getDay();
  let adv = "";
  let type = "";

  if (day == 0 || day == 6) {
    type = "Weekend";
    adv = "It's Time To Have Fun";
  } else {
    type = "Weekday";
    adv = "It's Time To Work Hard";
  }

  res.render("index", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server Running On Port ${port}`);
});
