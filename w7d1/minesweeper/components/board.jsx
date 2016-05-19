var React = require('react'),
    Tile = require('./tile');

var Board = React.createClass({
  render: function() {
    return (
      <div className='board'>
        {
          this.props.board.grid.map(function(row, rowIdx) {
            return (
              <div className='row'>
                {
                    row.map(function(tile, tileIdx) {
                    return <Tile tile={tile} updateGameCallback={this.props.updateGameCallback} location={[rowIdx, tileIdx]}/>
                  }.bind(this))
                }
              </div>
            )
          }.bind(this))
        }
      </div>
    )
  }
});

module.exports = Board;
