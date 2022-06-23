const fs = require("fs");
// fs.mkdir("your-files-here", function (err) {
//   if (err) {
//     console.log(`ERROR: ${err}`);
//   } else {
//     console.log("directory created");
//   }
// })
//
// Mode                 LastWriteTime         Length Name
// ----                 -------------         ------ ----
// d-----        23/06/2022  03:59 PM                your-files-here
// -a----        23/06/2022  03:59 PM            475 directory.js
// -a----        23/06/2022  12:53 PM           3560 readme.md

if (fs.existsSync("your-files-here")) {
  console.log("already there!");
} else {
  fs.mkdir("your-files-here", function (err) {
    if (err) {
      console.log(`ERROR: ${err}`);
    } else {
      console.log("directory created");
    }
  });
}
