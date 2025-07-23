let path = require("path");

// console.log(__dirname);
//* C:\Users\shiva\OneDrive\Desktop\NODEJS\Modules

// console.log(__filename);
//* C:\Users\shiva\OneDrive\Desktop\NODEJS\Modules\path.js

// console.log(module)
// console.log(exports)
// console.log(require)

//! 1) extname() ===> it returns the extension of the file
// console.log(path.extname("./event.js"));
// console.log(path.extname(__filename));
// console.log(path.extname("./dummyFolder"));
// console.log(path.extname(__dirname));

//! 2) basename() ==> it returns the base/last part of the path
// console.log(path.basename("../Dummy1/dummy2/app.txt"))
// console.log(path.basename(__filename))
// console.log(path.basename("../Dummy1/dummy2"))

//! 3) parse() ==> it returns an object of the parsed path
console.log(path.parse(__filename));
console.log(path.parse("./events.js"));
console.log(path.parse(__dirname));

//! 4) format() ==> it converts path object to string

//! 5) join() ==> it joins path
// console.log(path.join("folder1", "folder2"));
// console.log(path.join(__dirname, "fs.js"))
// console.log(path.join(__dirname, "..", "Js", "hello.txt"))

//* module wrapper  ==> NodeJs wraps all the code into a module wrapper internally
// (function (exports, require, module, __dirname, __filename) {
//   // Whole code of the file
// })();
