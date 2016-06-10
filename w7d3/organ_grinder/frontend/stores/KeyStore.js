var ApplicationDispatcher = require('../dispatcher/Dispatcher'),
    Store = require('flux/utils').Store

var KeyStore = new Store(ApplicationDispatcher)

var _keys = []

KeyStore.all = function() {
  return _keys.slice()
},

KeyStore.addKey = function(key) {
  if (key) {
    _keys.push(key)
    KeyStore.__emitChange()
  }
},

KeyStore.removeKey = function(key) {
  if (key) {
    _keys.splice(_keys.indexOf(key), 1)
    KeyStore.__emitChange()
  }
},

KeyStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'KEYPRESSED':
      KeyStore.addKey(payload.key);
      break;
    case 'KEYRELEASED':
      KeyStore.removeKey(payload.key);
      break;
  }
}

module.exports = KeyStore
