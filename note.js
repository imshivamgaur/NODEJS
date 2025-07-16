//* =========================== MODULES IN NODE.JS ==========================

// user-defined modules ==> module which are defined by the user

// in order to export a module, we have two ways
//! 1) module.exports = variableName; (using this we can only export one variable at a time)

//! 2) module.exports = {variableName1, variableName2}; (using this we can export multiple variables at a time)

//& for importing we have two ways
//? the syntax is ==> let variableName = require("path of the file");

//! let variableName = require("path");
//! let {variableName1, variableName2, ...} = require("path");


//& Build-in modules ==> these modules are bundled with Node.js installation, also called as core modules

// examples ==> fs, http, path, os, events, crypto

//? syntax for importing build-in modules ==>
// Let variableName = require("moduleName");



//& ========================== FILE SYSTEM (FS) MODULE ==========================

//! using js, we can interact with files and folders.
//! Interaction (CRUD)