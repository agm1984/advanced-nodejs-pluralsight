/**
 * SYSTEM STATS
 */

// Get node.js Version
const nodeVer = process.version;
console.log(`NODE VERSION: ${nodeVer}`);

// Get node.js Process ID
const pid = process.pid;
console.log(`NODE PROCESS ID: ${pid}`);

// Get node.js CPU Usage
const cpuUsage = process.cpuUsage();
console.log(`NODE CPU USAGE: ${JSON.stringify(cpuUsage)}`);

// Get node.js Process Uptime
const uptime = process.uptime();
console.log(`NODE UPTIME: ${uptime}`);

// Get node.js Memory Usage
const memoryUsage = process.memoryUsage();
console.log(`NODE MEMORY USAGE: ${JSON.stringify(memoryUsage)}`);

/**
 * EVENT HANDLERS
 */

// On Exit event
process.on('exit', (err) => {
  console.log('Node exiting... ' + err);
});

// On Uncaught Exception event
process.once('uncaughtException', (err) => {
  console.log(err);
  // Do some cleanup
  process.exit(1); // Avoid hung state
});

// On Unhandled Rejection event
process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at:', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});

/**
 * DNS LOOKUP
 */

const dns = require('dns');
const lookupAddress = 'pluralsight.com';
const lookupIP = '34.209.15.180';

// Lookup using libuv module
dns.lookup(lookupAddress, (err, address) => {
  console.log(`ADDRESS VIA LIBUV: ${address}`);
});
// Lookup and get array of A records
dns.resolve4(lookupAddress, 'A', (err, address) => {
  console.log(`ADDRESS A RECORDS: ${address}`);
});
// Lookup and get array of MX records
dns.resolve4(lookupAddress, 'MX', (err, address) => {
  console.log(`ADDRESS MX RECORDS: ${address}`);
});

dns.reverse(lookupIP, (err, hostnames) => {
  console.log(`HOSTNAMES FOR ${lookupIP}: ${hostnames}`);
});

// View HTTP Status Codes
const http = require('http');
console.log(http.STATUS_CODES);

// URL
const url = require('url');
console.log(url.parse('http://www.poo.com/search?q=fart'));

// Querystring Module
const querystring = require('querystring');

console.log(`QUERY STRING: ${querystring.stringify({ name: 'diaper', test: 'fairly true' })}`);