let fs = require("fs");
// let fs = require("node:fs")
// "node: " ==> it tells us that the module is build in with node.

// console.log(fs);

//& Write file synchronously

//& CRUD

// console.log(1);
// fs.writeFileSync("./demo.js", "console.log('Hello World');");
// fs.writeFileSync(
//   "./Js/hello.txt",
//   "Hey this file is build with fs FileSync method"
// );

// console.log("file created");

// console.log(2);
// console.log(3);

//& Read file synchronously

// console.log(1);
// console.log(2);

// let data = fs.readFileSync("../Js/hello.txt", "utf-8");
// console.log(data);
// console.log(3);

//& Updating file synchronously
// method name ==> appendFileSync();
// sytax name ==> appendFileSync("file path", "new data");

console.log(1);
console.log(2);
fs.appendFileSync(
  "../Js/hello.txt",
  "\nThis is new data added to the file with the help of appendFileSync method"
);
console.log("file updated successfully");
console.log(3);


//~ if the file is not present at the path, then a new file will be created with the given name and data.
//~ if the file is present at the path, then the data will be added to the end of the file.