const cluster = require('cluster'); // Load Cluster Module
const os = require('os'); // Load OS Module

// Check if server is master
if (cluster.isMaster) {
  const cpus = os.cpus().length;
  console.log(`Forking for ${cpus} CPUs`);
  // Cluster server N times
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
  // Get list of current workers
  console.dir(cluster.workers, { depth: 0 });
  // Loop through array of all workers
  Object.values(cluster.workers).forEach((worker) => {
    worker.send(`Hello worker ${worker.id}`)
  });
} else {
  // Start HTTP Server if not master
  require('./server');
}
