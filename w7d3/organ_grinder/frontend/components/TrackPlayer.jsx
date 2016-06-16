var React = require('react')

var TrackPlayer = React.createClass({
  playTrack: function() {
    this.props.track.play()
  },

  render: function() {
    return (
            <li>
              {this.props.track.name}
              <button onClick={this.playTrack}>Play</button>
              <button>Delete</button>
            </li>
            )
  }
})

module.exports = TrackPlayer
