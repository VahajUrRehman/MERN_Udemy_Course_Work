import { doesNotMatch } from "assert";
import fs from "fs";
import inquirer from "inquirer";
import { url } from "inspector";
import qr from "qr-image";

inquirer
  .prompt({
    message: "Enter The Url: ",
    name: "URL",
  })
  .then((answers) => {
    console.log(answers);
    const url = answers.URL;
    const qr_png = qr.image(url, { type: "png" });
    qr_png.pipe(fs.createWriteStream("qr.png"));

    fs.writeFile("input.txt", url, (err) => {
      if (err) throw err;
      console.log("File Written Successfully");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });
