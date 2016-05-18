var React = require('react');

var Tile = React.createClass({
  handleClick: function(event) {
    event.preventDefault()
    var flagging = event.altKey
    this.props.updateGameCallback(this.props.tile, flagging)
  },

  render: function() {
    var tileIndicator
    var tileClass = ''
    var tile = this.props.tile
    if (tile.explored) {
      var bombedNeighbors = tile.neighbors().filter(function(t)
        {return t.bombed}
      ).length

      tileIndicator = bombedNeighbors || ' '
      tileClass = tileClass + ' tile__explored'
    } else if (tile.flagged) {
      tileIndicator = 'F'
    } else if (tile.bombed) {
      tileIndicator = '*'
    }

    return <div className={'tile' + tileClass}   onClick={this.handleClick}>{tileIndicator}</div>
  }
});

module.exports = Tile;
