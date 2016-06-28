var React = require('react'),
    TrackActions = require('../actions/TrackActions')

var TrackPlayer = React.createClass({
  playTrack: function() {
    this.props.track.play()
  },

  deleteTrack: function() {
    TrackActions.deleteTrack(this.props.track)
  },

  render: function() {
    return (
            <li>
              {this.props.track.name}
              <button onClick={this.playTrack}>Play</button>
              <button onClick={this.deleteTrack}>Delete</button>
            </li>
            )
  }
})

module.exports = TrackPlayer
