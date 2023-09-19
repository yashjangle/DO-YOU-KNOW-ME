const readLineSync = require("readline-sync");
const chalk = require("chalk");
let score = 0;
const nameInput = readLineSync.question("Hello! May I know your name?\n")

console.log(chalk.bold.bgYellow(`Welcome ${nameInput} to DO YOU KNOW ME? \n`))
console.log(`${nameInput}, there are total 5 questions.
1: You will get 2 points as score on right answer.
2: One point will be deducted on wrong answer.\n`)

const quesAns = [
  {
    question: `What is my name ?
    a: Nilesh
    b: Tanay
    c: Vinay
    d: Yash\n`,
    answer: `d`
  },
  {
    question: `Where do I live ?
  a : Bangalore
  b: Mumbai
  c: Delhi
  d: Chennai\n`,
    answer: `b`
  },
  {
    question: `In what feild I have done masters ?
  a : Science
  b: Computer Science
  c: Arts
  d: Commerce\n`,
    answer: `b`
  },
  {
    question: `What do i love doing the most ?
  a: Watching movies
  b: Reading books
  c: Going for treks
  d: playing Cricket\n`,
    answer: `d`
  },
  {
    question: `Who is my favourite cricketer ?
  a: Virat kohli
  b: Rohit Sharma
  c: Jasprit bumrah
  d: Hardik Pandya\n`,
    answer: `d`
  }
]

function play(question, answer) {
  const quesInput = readLineSync.question(question).toLowerCase();
  const correctAns = answer;

  if(quesInput === correctAns) {
    console.log(`You entered ${quesInput}.`)
    console.log(chalk.bold.greenBright(`Right Answer!`))
    score = score + 2;
  }else{
    console.log(`You entered ${quesInput}.`)
    console.log(chalk.bold.red(`Wrong Answer!`))
    console.log(`The correct answer is ${correctAns}.`)
    score = score - 1;
  }
   if(score < 0) {
    score = 0;
  }
   console.log(chalk.bold.blue.underline(`Score: ${score}\n`))
}

for(let i = 0; i < quesAns.length; i++) {
  play(quesAns[i].question, quesAns[i].answer)
}
console.log(`Your total score is ${score} \n`)

const remark = score >=8 && score <= 10 ? `Remark: You do know quite a lot about me!😀` : score < 8 && score >= 4 ? `Remark: You do know quite a bit about me!😊` : `Remark: You don't know much about me. 🙁`
console.log(chalk.bold.yellowBright.underline(remark))