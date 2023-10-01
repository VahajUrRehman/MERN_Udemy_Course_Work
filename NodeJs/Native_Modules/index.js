const fs = require("fs");

fs.writeFile("message.txt", "Hello World From NodeJs", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File Saved Sucessfully");
  }
});

fs.readFile("./message.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
