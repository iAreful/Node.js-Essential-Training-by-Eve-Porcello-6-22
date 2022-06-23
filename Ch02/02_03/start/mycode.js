// function grab(flag) {
//     let indexAfterFlag = process.argv.indexOf(flag) + 1;
//     return process.argv[indexAfterFlag];
//   }
  
//   let greeting = grab("--greeting");
//   let user = grab("--user");
  
//   console.log(greeting);
//   console.log(user);


// Process Code
// console.log(process.argv)
// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'C:\\Users\\Areful\\Codes\\mycode.js'
// ]


// command Flag
// node mycode --user Areful --greeting "hello from node" 
[
    'C:\\Program Files\\nodejs\\node.exe',
    'C:\\Users\\Areful\\Videos\\ss\\mycode',
    '--user',
    'Areful',
    '--greting',
    'hell from node'
]

function grab(flag) {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
  }

  let greeting = grab("--greeting");
  let user = grab("--user");
  
  console.log(greeting);
  console.log(user);
//  command  node mycode --user Areful --greeting "hello from node"
//output 
// hello from node
// Areful

