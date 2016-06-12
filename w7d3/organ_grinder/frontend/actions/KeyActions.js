var ApplicationDispatcher = require('../dispatcher/Dispatcher');

var KeyActions = {
  keyPressed: function(key) {
    ApplicationDispatcher.dispatch({
      actionType: 'KEYPRESSED',
      key: key
    })
  },

  keyReleased: function(key) {
    ApplicationDispatcher.dispatch({
      actionType: 'KEYRELEASED',
      key: key
    })
  },

  playbackDataChanged: function(keys) {
    ApplicationDispatcher.dispatch({
      actionType: 'PLAYBACKDATACHANGED',
      keys: keys
    })
  }
}

module.exports = KeyActions
