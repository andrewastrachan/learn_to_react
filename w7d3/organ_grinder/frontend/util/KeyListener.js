var KeyMappings = require('../constants/KeyMappings'),
    KeyActions  = require('../actions/KeyActions')

$(document).keydown(function(e) {
  var key = KeyMappings[e.keyCode]
  KeyActions.keyPressed(key)
}).keyup(function(e) {
  var key = KeyMappings[e.keyCode]
  KeyActions.keyReleased(key)
})
