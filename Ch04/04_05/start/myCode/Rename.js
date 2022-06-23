const fs = require("fs");

//part 1
// fs.renameSync("./lib/config.js", "./lib/project-config.js");
//fs.renameSync("target file", "after renamed file name + with full path ");

// console.log("Config.js file renamed"); //Config.js file renamed

//part 2
// fs.rename("./lib/notes.md", "./notes.md", function (err) {
//   if (err) {
//     throw err;
//   }
//   console.log("Notes markdown file moved"); //Notes markdown file moved
// });


//part 3
// remove files
fs.unlinkSync("./lib/sample.js");


//async 
fs.unlink("notes.md", function (err) {
  if (err) {
    throw err;
  }
  console.log("Notes are gone");
});
