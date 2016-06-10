var ApplicationDispatcher = require('../dispatcher/Dispatcher'),
    Store = require('flux/utils').Store

var KeyStore = new Store(ApplicationDispatcher)

KeyStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'KEYPRESSED':
      debugger
      //do shit
  }
}

module.exports = KeyStore
