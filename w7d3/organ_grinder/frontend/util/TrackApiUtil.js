var TrackActions  = require('../actions/TrackActions')

var TrackApiUtil = {
  index: function() {
    var that = this
    $.ajax({
      url: this._trackBaseUrl,
      success: function(tracks) {
        TrackActions.tracksLoaded(tracks)
      },
      error: function(error) {
        console.log(error)
      }
    });
  },

  create: function(track) {
    var that = this
    $.ajax({
      method: 'POST',
      data: {track: track},
      url: this._trackBaseUrl,
      success: function(track) {
        debugger
      },
      error: function(error) {
        debugger
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
        debugger
      },
      error: function(error) {
        debugger
      }
    });
  },

  _trackBaseUrl: 'http://localhost:3000/api/tracks'
}

module.exports = TrackApiUtil
