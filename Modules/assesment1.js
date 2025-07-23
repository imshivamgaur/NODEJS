//* 1 Node.js is a runtime environment of javscript to run the javscript code in server side means Using Node.js we can run javscript code directly to our computer.
// Node.js use V8 engine + c++ code as a runtime environment.

// 2. user-defined modules:- User defined modules are those modules which is build by user for example

//* 3
// let fs = require("fs")
// const result = fs.readFileSync("./demo.js", "utf-8");
// console.log(result);

//* 4
//! Event loop is the mechanism in node.js which helps to run asyncronous task efficently without blocking the execution.

//* 6
let fs = require("fs");
// const readFile = () => {
//   let result1 = fs.readFileSync("./demo.js", "utf-8");
//   let result2 = fs.readFileSync("./index.js", "utf-8");
//   const concat = `${result1} \n${result2}`;

//   return concat;
// };

// const result = readFile();
// console.log(result);

//* 8
//! to handle errors in synchronous fs operations we use try-catch for error handling without crashing the process.

// const readFileSync = () => {
//   try {
//     const result = fs.readFileSync("./events.js", "utf-8");
//     console.log(result);
//   } catch (error) {
//     console.log("Error occured: ", error);
//   }
// };

// readFileSync();

//* 9

const a = 10;
const b = 0;

const arthemticOperation = () => {
  const additon = a + b;
  const subtract = a - b;
  const multiply = a * b;
  let divide = a / b;
  if (divide == Infinity) {
    console.log(new Error("Devision by zero"));
    divide = "Error: Devision by zero";
  }

  fs.writeFileSync(
    "./results.txt",
    `Addition: ${additon} \nSubtraction: ${subtract} \nMultiplication: ${multiply} \nDivision: ${divide} `
  );
};

arthemticOperation();
