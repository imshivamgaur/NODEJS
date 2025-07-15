function greet(name) {
  console.log(`Happy Birthday ${name}`);
}

let obj = {
  name: "shivam",
  subject: "NodeJs",
};

module.exports = {
  greet,
  obj,
};
