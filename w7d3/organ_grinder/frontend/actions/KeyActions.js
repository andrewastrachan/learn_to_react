var ApplicationDispatcher = require('../dispatcher/Dispatcher');

var KeyActions = {
  keyPressed: function(key) {
    ApplicationDispatcher.dispatch({
      actionType: 'KEYPRESSED',
      key: key
    })
  }
}

module.exports = KeyActions
