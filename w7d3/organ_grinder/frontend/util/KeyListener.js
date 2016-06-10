var KeyMappings = require('../constants/KeyMappings'),
    KeyActions  = require('../actions/KeyActions')

$(document).on('keydown', function(e) {
  var key = KeyMappings[e.charCode]
  KeyActions.keyPressed(key)
})
