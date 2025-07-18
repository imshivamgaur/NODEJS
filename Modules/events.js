const Event = require("events");
// console.log(Events);

class myEventEmitter extends Event { }

let event = new myEventEmitter();

// on   ==> with the help of on(), we define the functionality of the event.
// emit ==> we can create our own event

// event.on("firstEvent", () => {
//   console.log("event called");
// });

// event.on("firstEvent", () => {
//   console.log("event called twice");
// });

// event.on("secondEvent", () => {
//   console.log("This is second event");
// });

// event.emit("firstEvent");

// event.emit("secondEvent");

event.on("new-user", (name, id) => {
  console.log(name);
  console.log(id);
  console.log(`New user joined with name ${name} and id:${id}`);
});

event.on("new", () => {
  console.log("new event called");
});

event.emit("new-user", "shivam", "1234");

event.emit("new");
