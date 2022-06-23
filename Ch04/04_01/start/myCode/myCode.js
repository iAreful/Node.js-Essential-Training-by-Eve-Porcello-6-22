const fs = require("fs"); // file module add

let files =fs.readdirSync("./")
console.log(files)
/*
[ 'myCode.js', 'name.txt' ]
 */


fs.readdir("./", function (err, files) {
  if (err) {
    throw err;
  }
  console.log(files);
});

console.log("reading files...");
/**
 * [ 'myCode.js', 'name.txt' ]
reading files...
[ 'myCode.js', 'name.txt' ]
 */