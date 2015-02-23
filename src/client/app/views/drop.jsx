var React = require('react');
var Dropzone = require('react-dropzone');
var Image = require('./image.jsx');
var dispatcher = require('../dispatchers/dispatcher');
var eventNames = require('../configuration/eventNames');

var DropzoneDemo = React.createClass({
  onDrop: function (files) {
    dispatcher.emit(eventNames.filesQueuedByClient, files);
  },

  onChange: function(files){
    this.setState({files: files});
  },

  getInitialState: function() {
    return {files:[]};
  },

  componentDidMount: function() {
    dispatcher.on(eventNames.filesAddedToStore, this.onChange);
  },

  componentWillUnmount: function() {
    dispacther.off(eventNames.filesAddedToStore, this.onChange);
  },

  render: function () {
    var listItems = this.state.files.reduce(function(listItems, file) {
      // If result.id can look like a number (consider short hashes), then
      // object iteration order is not guaranteed. In this case, we add a prefix
      // to ensure the keys are strings.
      listItems['file-' + file.name] = <Image file={file} />;
      return listItems;
    }, {});

    return (
      <div>
        <Dropzone onDrop={this.onDrop} size={150} >
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
        <ul id="file-list">{listItems}</ul>
      </div>
    );
  }
});

document.addEventListener('DOMContentLoaded', function () {
  React.render(<DropzoneDemo />, document.getElementById('drop-zone'));
});
