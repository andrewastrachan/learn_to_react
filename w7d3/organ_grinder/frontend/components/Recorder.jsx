var React = require('react'),
    Track = require('../util/Track'),
    KeyStore = require('../stores/KeyStore')

var Recorder = React.createClass({
  getInitialState: function() {
    return {isRecording: false, track: new Track({})}
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

  render: function() {
    return (
              <div>
                <h3>Recorder</h3>
                <button onClick={this.toggleRecording}>{this.state.isRecording ? 'Stop Rec' : 'Start Rec'}</button>
                <button onClick={this.playRecording}>Play</button>
              </div>
            )
  }
})

module.exports = Recorder
