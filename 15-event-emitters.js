// on => listen for an event
// emit => emit and event 
// emit placement matters
// place "emit" after "on"



const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.emit('response'); // NO EVENTS IS EMITTED!!
customEmitter.on('response',() => {
  console.log(`Data received`)
});
customEmitter.emit('response'); // EMIT ABOVE "response" EVENTS - RESULT: "Data received"
customEmitter.on('response',() => {
  console.log(`Some other logic in here`)
});

customEmitter.on('other',() => {
  console.log(`Another logic in here`)
});

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.emit('other'); // EMIT ABOVE "other" EVENTS - RESULT:  "Another other logic in here"

customEmitter.emit('response'); // EMIT ALL ABOVE "response" EVENTS - RESULT: "Data received" and "Some other logic in here"

customEmitter.on('getdata',(name,age) => {
  console.log(`Data received user ${name} and age ${age}`)
});
customEmitter.emit('getdata','kirk',33) // EMIT ABOVE "getdata" EVENTS - RESULT:  "Data received user kirk and age 33"