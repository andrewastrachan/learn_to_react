var React = require('react'),
    TrackStore = require('../stores/TrackStore'),
    TrackPlayer = require('../components/TrackPlayer')

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
      return <TrackPlayer track={track} />
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
