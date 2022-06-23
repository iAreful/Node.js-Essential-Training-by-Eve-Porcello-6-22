const fs = require("fs");

// let noteRead = fs.readFileSync("./name.txt", "UTF-8")

// console.log(noteRead)
//I love Node Js


fs.readFile("./readme.md", "UTF-8", (err, ipsum) => {
  console.log(ipsum);
});

console.log("reading the file...");
