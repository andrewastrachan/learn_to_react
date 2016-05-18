var React = require('react'),
    ReactDOM = require('react-dom'),
    Minesweeper = require('./minesweeper'),
    Board = require('./components/board')

var Game = React.createClass({
  getInitialState: function() {
    game = new Minesweeper.Board(10, 10)
    return {board: new Minesweeper.Board(10, 10)}
  },

  updateGame: function(tile, flagging) {
    flagging ? tile.toggleFlag() : tile.explore()
    this.setState({board: this.state.board})
  },

  render: function() {
    return <Board board={this.state.board} updateGameCallback={this.updateGame}/>
  }
});

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<Game />, document.getElementById('main'))
});
