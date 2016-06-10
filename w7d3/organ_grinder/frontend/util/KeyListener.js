var KeyMappings = require('../constants/KeyMappings'),
    KeyActions  = require('../actions/KeyActions')

$(document).keydown(function(e) {
  var key = KeyMappings[e.charCode]
  KeyActions.keyPressed(key)
}).keyup(function(e) {
  var key = KeyMappings[e.charCode]
  KeyActions.keyReleased(key)
})
