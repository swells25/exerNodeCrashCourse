const EventEmitter = require('events');

// create class
class MyEmitter extends EventEmitter {}

//Init object
const myEmitter = new MyEmitter();

// event listener
myEmitter.on('event', () => console.log('Event Fired!'));

//init even

myEmitter.emit('event');
