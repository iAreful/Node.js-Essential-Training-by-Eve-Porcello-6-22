const ModuleOne = require("./ModuleOne");
console.log(ModuleOne.anything)
// output: true

console.log(ModuleOne.inc())  //1
// output: 1

// like react components add
const { inc, dec, getCount } = require("./ModuleOne");

inc(); //2
inc(); //3
inc(); //4

console.log(`the count is ${getCount()}`);  // so inc is now 4
