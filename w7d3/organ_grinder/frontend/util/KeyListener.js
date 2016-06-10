var KeysToOrganKeys = require('../constants/KeysToOrganKeys'),
    KeyActions  = require('../actions/KeyActions')

$(document).keydown(function(e) {
  var key = KeysToOrganKeys[e.keyCode]
  KeyActions.keyPressed(key)
}).keyup(function(e) {
  var key = KeysToOrganKeys[e.keyCode]
  KeyActions.keyReleased(key)
})
