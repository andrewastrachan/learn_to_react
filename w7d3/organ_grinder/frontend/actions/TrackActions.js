var ApplicationDispatcher = require('../dispatcher/Dispatcher')

var TrackActions = {
  addTrack: function(track) {
    ApplicationDispatcher.dispatch({
      actionType: 'ADDTRACK',
      track: track
    })
  }
}

module.exports = TrackActions
