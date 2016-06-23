var ApplicationDispatcher = require('../dispatcher/Dispatcher')

var TrackActions = {
  addTrack: function(track) {
    ApplicationDispatcher.dispatch({
      actionType: 'ADDTRACK',
      track: track
    })
  },

  tracksLoaded: function(tracks) {
    ApplicationDispatcher.dispatch({
      actionType: 'TRACKSLOADED',
      tracks: tracks
    })
  }
}

module.exports = TrackActions
