
const events = require('events');


//instantiate EventEmitter
const eventEmitter = new events.EventEmitter();

//Create an event handler 
eventEmitter.on("Received", function(data) {
console.log("Received data: " + data);
});

//Fire the event 
eventEmitter.emit("Received", "Hello World");




