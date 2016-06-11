var React            = require('react'),
    OrganKeysToNotes = require('../constants/OrganKeysToNotes'),
    KeyStore         = require('../stores/KeyStore'),
    Note             = require('../util/Note')


var OrganKey = React.createClass({
  getInitialState: function() {
    var noteFreq = OrganKeysToNotes[this.props.keyName]
    var keys = KeyStore.all()
    return {keys: keys, note: new Note(noteFreq), playing: keys.includes(this.props.keyName)}
  },

  componentDidMount: function() {
    KeyStore.addListener(this.keysChanged)
  },

  keysChanged: function() {
    var keys = KeyStore.all()
    this.setState({keys: keys, note: this.state.note, playing: keys.includes(this.props.keyName)})
    this.state.playing ? this.state.note.start() : this.state.note.stop()
  },

  render: function() {
    return (
      <div>
        <li>{this.props.keyName}, playing: {this.state.keys.includes(this.props.keyName) ? 'true' : 'false'}</li>
      </div>
    )
  }
})

module.exports = OrganKey
