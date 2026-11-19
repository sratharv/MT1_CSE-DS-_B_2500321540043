const EventEmitter = require('events');

const event = new EventEmitter();

event.on('click', () => {
    console.log("Button clicked!");
});

event.on('change', () => {
    console.log("Value changed!");
});

event.emit('click');
event.emit('change');``