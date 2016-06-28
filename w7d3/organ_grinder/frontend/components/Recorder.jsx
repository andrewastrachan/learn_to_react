var React = require('react'),
    Track = require('../util/Track'),
    KeyStore = require('../stores/KeyStore'),
    TrackActions = require('../actions/TrackActions'),
    TrackStore   = require('../stores/TrackStore')

var Recorder = React.createClass({
  getInitialState: function() {
    return ({
      isRecording: false,
      track: new Track({})
    })
  },

  componentDidMount: function() {
    KeyStore.addListener(this.addNotes)
  },

  addNotes: function() {
    if (this.state.isRecording) {
      this.state.track.addNotes(KeyStore.all())
    }
  },

  toggleRecording: function() {
    var isRecording = !this.state.isRecording

    this.setState({
      isRecording: isRecording,
      track: this.state.track
    })

    isRecording ? this.state.track.startRecording(KeyStore.all()) : this.state.track.stopRecording()
  },

  playRecording: function() {
    this.state.track.play()
  },

  saveRecording: function() {
    TrackActions.addTrack({
                            name: this.state.track.name,
                            roll: this.state.track.roll.slice(),
                            start_time: this.state.track.startTime
                          })
  },

  newRecording: function() {
    this.setState({
      isRecording: false,
      track: new Track({name: 'new'})
    })
  },

  render: function() {
    return (
              <div>
                <h3>Recorder</h3>
                <button onClick={this.toggleRecording}>{this.state.isRecording ? 'Stop Rec' : 'Start Rec'}</button>
                <button onClick={this.playRecording}>Play</button>
                <button onClick={this.saveRecording}>Save</button>
                <button onClick={this.newRecording}>New</button>
              </div>
            )
  }
})

module.exports = Recorder
