var ApplicationDispatcher = require('../dispatcher/Dispatcher')

var TrackActions = {
  addTrack: function(track) {
    ApplicationDispatcher.dispatch({
      actionType: 'ADDTRACK',
      track: track
    })
  },

  trackAdded: function(track) {
    debugger
    ApplicationDispatcher.dispatch({
      actionType: 'TRACKADDED',
      track: track
    })
  },

  deleteTrack: function(track) {
    ApplicationDispatcher.dispatch({
      actionType: 'DELETETRACK',
      track: track
    })
  },

  trackDeleted: function(track) {
    ApplicationDispatcher.dispatch({
      actionType: 'TRACKDELETED',
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
