var AppDispatcher = require('../dispatcher/dispatcher.js'),
    ClickActions  = require('../actions/clickActions');

var _clickCount = 0;
var _callbacks  = []

var ClickStore = {
  addChangeHandler: function(callback) {
    _callbacks.push(callback);
  },

  removeChangeHandler: function(callback) {
    _callbacks.splice(callback, 1);
  },

  count: function() {
    return _clickCount;
  },

  onDispatch: function(payload) {
    switch(payload.actionType) {
      case 'INCREMENT':
        this._increment()
        this._emitChange()
    }
  },

  _increment: function() {
    _clickCount++;
  },


  _emitChange: function() {
    _callbacks.forEach(function(callback) {
      callback();
    })
  }
}

AppDispatcher.register(ClickStore.onDispatch.bind(ClickStore));

module.exports = ClickStore;
