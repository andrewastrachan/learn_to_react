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

  startRecording: function() {
    this.setState({isRecording: true, track: this.state.track})
    this.state.track.startRecording(KeyStore.all())
  },

  stopRecording: function() {
    this.setState({isRecording: false, track: this.state.track})
    this.state.track.stopRecording()
  },

  playRecording: function() {
    this.state.track.play()
  },

  render: function() {
    return (
              <div>
                <h3>Recorder</h3>
                <button onClick={this.startRecording}>Start</button>
                <button onClick={this.stopRecording}>Stop</button>
                <button onClick={this.playRecording}>Play</button>
                <div>Recording: {this.state.isRecording ? 'recording' : 'stopped'}</div>
              </div>
            )
  }
})

module.exports = Recorder
