const http = require('http'); // Load HTTP Module
const pid = process.pid; // Set Process ID

// Start HTTP Server
http.createServer((req, res) => {
  for (let i = 0; i < ie2; i++); // simulate cpu work
  res.end(`Handled by process ${pid}`);
}).listen(8080, () => {
  console.log(`Started process ${pid}`);
});
