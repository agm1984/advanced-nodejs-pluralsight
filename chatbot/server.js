const EventEmitter = require('events'); // Load Events Module

class Server extends EventEmitter {
  constructor(client) {
    super();
    // Display message to new client/user after they connect
    process.nextTick(() => {
      this.emit(
        'response',
        `Hey, what can I help you with? (Type 'help' for commands)`
      );
    });
    client.on('command', (command, args) => {
      // User inputs that trigger responses
      switch (command) {
        case 'help':
        case 'add':
        case 'delete':
          this[command](args);
          break;
        default:
          this.emit('response', 'Unknown command');
      }
    });
  }

  help() {
    this.emit(
      'response',
      `Available commands:

      add task
      delete :id
      `
    );
  }

  add(args) {
    this.emit(
      'response',
      args.join(' ')
    );
  }

  delete(args) {
    this.emit('response', 'delete ...' + args);
  }
}

// Export Bot to client
module.exports = (client) => new Server(client);
