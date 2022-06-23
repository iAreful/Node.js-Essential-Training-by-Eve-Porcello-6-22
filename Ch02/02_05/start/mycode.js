// process.stdout.write("Hello  \n \n");

const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language"
  ];
  const answers = [];
  
  function ask(i = 0) {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
  }
  
  ask();
  
  process.stdin.on("data", function (data) {
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
      ask(answers.length);
    } else {
      process.exit();
    }
  });
  
  //  fix previous problem
  
  // now use the answer
  process.on("exit", function () {
    process.stdout.write("\n\n\n\n");
    process.stdout.write(
      `your answer's is: \n
       Q:What is your name?
       >A: ${answers[0]}\n
  
       Q:What would you rather be doing?
       >A: ${answers[1]}\n 
  
       Q:What is your preferred programming language
       >A: ${answers[2]}\n`
    );
  });
  