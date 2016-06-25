var TrackActions  = require('../actions/TrackActions'),
    Track         = require('./Track')

var TrackApiUtil = {
  index: function() {
    var that = this
    $.ajax({
      url: this._trackBaseUrl,
      success: function(tracks) {
        debugger
        TrackActions.tracksLoaded(tracks)
      },
      error: function(error) {
        console.log(error)
      }
    });
  },

  create: function(track) {
    debugger
    var that = this
    $.ajax({
      method: 'POST',
      data: {track: track},
      url: this._trackBaseUrl,
      success: function(track) {
        debugger
        TrackActions.trackAdded(track)
      },
      error: function(error) {
        console.log(error)
      }
    });
  },

  destroy: function(track) {
    var that = this
    $.ajax({
      method: 'DELETE',
      data: {id: track.id},
      url: this._trackBaseUrl,
      success: function(track) {
        TrackActions.trackDeleted(track)
      },
      error: function(error) {
        console.log(error)
      }
    });
  },

  _trackBaseUrl: 'http://localhost:3000/api/tracks'
}

module.exports = TrackApiUtil
