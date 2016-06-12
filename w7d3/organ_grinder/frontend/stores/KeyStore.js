var ApplicationDispatcher = require('../dispatcher/Dispatcher'),
    Store = require('flux/utils').Store

var _keys = []

var KeyStore = new Store(ApplicationDispatcher)

KeyStore.all = function() {
  return _keys.slice()
},

KeyStore.__addKey = function(key) {
  if (key && _keys.indexOf(key) == -1) {
    _keys.push(key)
    KeyStore.__emitChange()
  }
},

KeyStore.__removeKey = function(key) {
  if (key) {
    _keys.splice(_keys.indexOf(key), 1)
    KeyStore.__emitChange()
  }
},

KeyStore.__setKeys = function(keys) {
  if (keys) {
    _keys = keys
    KeyStore.__emitChange()
  }
}

KeyStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'KEYPRESSED':
      KeyStore.__addKey(payload.key)
      break
    case 'KEYRELEASED':
      KeyStore.__removeKey(payload.key)
      break
    case 'PLAYBACKDATACHANGED':
      KeyStore.__setKeys(payload.keys)
  }
}

module.exports = KeyStore
