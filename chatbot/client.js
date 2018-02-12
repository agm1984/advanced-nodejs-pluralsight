const EventEmitter = require('events'); // Load Events Module
const readline = require('readline'); // Read input from user

// Instantiate Client Interface to Bot
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const client = new EventEmitter();
const server = require('./server')(client); //

// Display the Bot's response
server.on('response', (resp) => {
  console.log(`<Bot> ${resp}`);
});

// Handle user's input
let command, args;
rl.on('line', (input) => {
  [command, ...args] = input.split(' '); // Split array of args from command
  client.emit('command', command, args);
});
