var React = require('react'),
    TrackStore = require('../stores/TrackStore')

var JukeBox = React.createClass({
  getInitialState: function() {
    return {tracks: TrackStore.all()}
  },

  componentDidMount: function() {
    TrackStore.addListener(this.tracksChanged)
  },

  tracksChanged: function() {
    this.setState({tracks: TrackStore.all()})
  },

  render: function() {
    var tracks = this.state.tracks.map(function(track) {
      return <li>{track.name}</li>
    })
    return(
      <div>
        <h3>Saved(not really) Tracks</h3>
        <ul>
          {tracks}
        </ul>
      </div>
    )
  }
})

module.exports = JukeBox
