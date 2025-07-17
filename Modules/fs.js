// let fs = require("fs");
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

// console.log(1);
// console.log(2);
// fs.appendFileSync(
//   "../Js/hello.txt",
//   "\nThis is new data added to the file with the help of appendFileSync method"
// );
// console.log("file updated successfully");
// console.log(3);

//~ if the file is not present at the path, then a new file will be created with the given name and data.
//~ if the file is present at the path, then the data will be added to the end of the file.

//& Deleting File sychronously

// method name ==> unlinkSync();
// sytax ==> unlinkSync("path");

// try {
//   console.log(1);
//   console.log(2);
//   fs.unlinkSync("./demo.js");
//   console.log("file deleted");
//   console.log(3);
// } catch (error) {
//   console.log("Something is wrong: ", error);
// }

//& Managing the folder/directories

//! ================ Creating a folder =========================

// method name ==> mkdirSync();
// syntax ==> mkdirSync("path/foldername")

// fs.mkdirSync("./School");
// console.log("folder created");

// function makeFolder() {
//   fs.mkdirSync("./project");
//   console.log("folder created");
//   fs.mkdirSync("./project/src");
//   console.log("folder created");
//   fs.writeFileSync(
//     "./project/src/app.js",
//     "this file is created by makeFolder func which is in fs.js"
//   );
//   console.log("file created");
// }

// makeFolder();

//*============ Copy the content of fs.js in a new file js.text ==================

// const data = fs.readFileSync("../Modules/fs.js", "utf-8");
// console.log(data);

// fs.writeFileSync("./fs.txt", data);
// console.log("file copy pasted");

//& Inbuild fs module for copy paste
// method name ==> copyFileSync();
// sytax ==> copyFileSync("src", "dest");
// fs.copyFileSync("./fs.js", "../app.txt");

//! ================== Deleting a file =======================

// method name ==> rmdirSync()
// Syntax ==> rmdirSync("path/foldername")

// fs.rmdirSync("./School");
// console.log("file deleted successfully");

// fs.rmdirSync("./project", { recursive: true });

//! =================== Renaming the file =================

// method name = renameSync();
// syntax ==> renameSync("old name", "new name");
// fs.renameSync("./demo.js", "new.js");

//* ========================= fs operation asynchronously (using callbacks) =======================

//! 1) ================ creating a file ===============
// method name ==> writeFile();
// syntax ==> writeFile("path", "data", callback)

// console.log(1);
// console.log(2);
// fs.writeFile("./demo.js", "new Changes", (err) => {
//   if (err) console.log(err);
//   console.log("file created");
// });
// console.log(3);

//! 2) ================ Reading a file ===============
// method name ==> readFile();
// syntax ==> readFile("path", "data", callback)

// console.log(1);
// console.log(2);
// fs.readFile("./fs.txt", "utf-8", (err, res) => {
//   if (err) console.log(err);
//   console.log("File reading complete");
//   console.log("data: ", res);
// });
// console.log(3);

//! 3) ================ appending a file ===============
// method name ==> appendFile();
// sytax ==> appendFile("path", "data", callback)

// console.log(1);
// console.log(2);
// fs.appendFile(
//   "./demo.js",
//   "\n //New line adding through appendFile()",
//   (err, res) => {
//     if (err) console.log(err);
//     console.log("file appended");
//   }
// );
// console.log(3);

//! 4) ================ Deleting a file ===============
// method name ===> unlink();

//! 5) ================ Creating a Folder ===============
// method name ===> mkdir();

//! 6) ================ Deleting a folder ===============
// method name ===> rmdir();

//! 7) ================ Renaming  ===============
// method name ===> rename();

//* ========================= fs operation asynchronously (using promises --> then/catch ) =======================

let fs = require("fs/promises");

//! 1) ================ Creating a file  ===============
// method name ==> writeFile();
// format ==> writeFile("path/name", "data").then().catch()

// const output = fs.writeFile(
//   "./new.js",
//   "\n //hello doston kya haal chal its an promise"
// );
// console.log(output);

// output
//   .then(() => {
//     console.log("file created");
//   })
//   .catch((err) => console.log(err));

//! 2) ================ Reading a file  ===============
// method name ==> readFile();
// format ==> readFile("path/name", "data").then().catch()

const output = fs.readFile("./index.js", "utf-8");

output
  .then((data) => {
    console.log("file reading complete");
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//! 3) ================ appending a file  ===============
