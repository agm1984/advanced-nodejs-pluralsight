// Load Net Module
const server = require('net').createServer();
const moment = require('moment');
let counter = 0; // Set number of chat users to zero
let sockets = {}; // Set with empty chat user list

// Start chat server
server.on('connection', (socket) => {
  // Assign socket ID to new user upon connection to server
  socket.id = counter++;

  console.log('Client connected');
  socket.write('Welcome to ADAM IRC\n');
  // Get user's name
  socket.write('Please type your name: ');

  // User text input event
  socket.on('data', (data) => {
    // Save user's name if they just joined and entered it
    if (!sockets[socket.id]) {
      socket.name = data.toString().trim();
      socket.write(`Welcome ${socket.name}!\n`);
      sockets[socket.id] = socket;
      return;
    }
    // Display the user's text input
    Object.entries(sockets).forEach(([key, cs]) => {
      // Omit name if self entered the text
      if (socket.id == key) return;
      cs.write(`[${moment().format('LT')}] <${socket.name}> `);
      cs.write(data);
    });
  });

  // User disconnect event
  socket.on('end', () => {
    delete sockets[socket.id];
    console.log('Client disconnected');
  });
});

// Start chat server
server.listen(8888, () => {
  console.log('Chat server started');
});
