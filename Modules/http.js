//! <==================== http ========================>

//* it stands for hyper text transfer protocol. which means that some set of rules have to   followed while sending and receving data/resorce from server.

//& rules means some set of methods that are used to send asnd recieve data from the server

//? get  --> it is used to fetch the data/resource from the server.
//? post --> it is used to send the data/resource to the server.
//? put/update  --> it is used to update the data of the server.
//? Delete  --> it is used to delete the data/resource of the server.
//^ stateless and RESTful API

//& http is a build in module in NodeJs, using which we can create our own web server.

//^ Steps to create a server in NodeJs
//? 1) import the build-n http module
//? 2) use createServer() to create a server and store the instance of the server in the variable.
//? 3) assing a po

const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 201;
  res.write("hello noob");
  res.end();
});

server.listen(9000, () => {
  console.log("Server is running at port 9000");
});
