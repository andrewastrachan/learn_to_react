var KeyActions = require('../actions/KeyActions')

var Track = function(options) {
  this.id   = options.id   || null
  this.name = options.name || 'untitled'
  this.roll = options.roll || []
}

Track.prototype.startRecording = function(notes) {
  this.startTime = Date.now()
  this.roll = [{
    time: Date.now() - this.startTime,
    notes: notes
  }]
}

Track.prototype.stopRecording = function() {
  this.addNotes([])
}

Track.prototype.addNotes = function(notes) {
  this.roll.push({
    time: Date.now() - this.startTime,
    notes: notes
  })
}

Track.prototype.play = function () {
  if (this.interval) {return}
  var playbackStartTime = Date.now()
  var currentNote = 0

  this.interval = setInterval(function() {
    var playData = this.roll[currentNote]
    if (!!playData) {
      var timeElapsed = Date.now() - playbackStartTime
      if (timeElapsed > playData.time) {
        KeyActions.playbackDataChanged(playData.notes)
        currentNote ++
      }
    } else {
      clearInterval(this.interval)
      this.interval = null
    }
  }.bind(this), 1)
}

module.exports = Track
