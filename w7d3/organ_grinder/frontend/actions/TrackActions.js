var ApplicationDispatcher = require('../dispatcher/Dispatcher')

var TrackActions = {
  addTrack: function(track) {
    {
      actionType: 'ADDTRACK',
      track: track
    }
  }
}

module.exports = TrackActions
