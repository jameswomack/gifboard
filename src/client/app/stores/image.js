var events = require('events');
var dispatcher = require('../dispatchers/dispatcher');
var eventNames = require('../configuration/eventNames');

class ImageStore extends events.EventEmitter {
  constructor(){
    super();
    this.files = [];
    dispatcher.on(eventNames.filesQueuedByClient, this.add.bind(this));
  }

  add(images){
    this.files.push(...images);
    dispatcher.emit(eventNames.filesAddedToStore, this.files);
  }
}

var imageStore = new ImageStore();

export default imageStore;
