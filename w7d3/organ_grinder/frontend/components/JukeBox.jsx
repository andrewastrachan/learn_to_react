var React = require('react'),
    TrackStore = require('../stores/TrackStore'),
    TrackPlayer = require('../components/TrackPlayer'),
    TrackApiUtil = require('../util/TrackApiUtil')

var JukeBox = React.createClass({
  getInitialState: function() {
    return {tracks: TrackStore.all()}
  },

  componentDidMount: function() {
    TrackStore.addListener(this.tracksChanged)
    TrackApiUtil.index()
  },

  tracksChanged: function() {
    this.setState({tracks: TrackStore.all()})
  },

  render: function() {
    var tracks = this.state.tracks.map(function(track) {
      return <TrackPlayer key={track.id} track={track} />
    })
    return(
      <div>
        <h3>Saved Tracks</h3>
        <ul>
          {tracks}
        </ul>
      </div>
    )
  }
})

module.exports = JukeBox
