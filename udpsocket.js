/**
 * SERVER
 */

// Load dgram module
const dgram = require('dgram');
// Create new socket
const server = dgram.createSocket('udp4');

// Listening event
server.on('listening', () => console.log('UDP Server listening'));
// Message event
server.on('message', (msg, rinfo) => {
  console.log(`${rinfo.address}:${rinfo.port} - ${msg}`);
});

// Start UDP socket listener
const PORT = 3333;
const HOST = '127.0.0.1';
server.bind(PORT, HOST);

/**
 * CLIENT
 */

const client = dgram.createSocket('udp4');
const ip = require('ip');

client.send('Sample message', PORT, HOST, (err) => {
  if (err) throw err;
  console.log(`UDP message sent: ${ip.address()}`);
  client.close();
})
