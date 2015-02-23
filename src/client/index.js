require('babel/register')();

var App = Object.create({
  children: {
    stores: {
      image: require('./app/stores/image')
    },
    views: {
      drop:  require('./app/views/drop.jsx')
    }
  },
  start: function(){}
});

App.start();

module.exports = App;
