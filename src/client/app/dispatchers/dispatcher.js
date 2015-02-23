var events = require('events');

class FileListDispatcher extends events.EventEmitter {
  constructor() {
    super();
  }
}

var fileListDispatcher = new FileListDispatcher();
module.exports = fileListDispatcher;
