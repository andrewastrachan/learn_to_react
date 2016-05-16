var React = require('react'),
    ReactDOM = require('react-dom'),
    Minesweeper = require('./minesweeper'),
    Board = require('./components/board')

var Game = React.createClass({
  getInitialState: function() {
    return {board: Minesweeper.board}
  },

  updateGame: function() {
    //Updates the board state
  },

  render: function() {
    return <Board board={this.state.board} updateGameCallback={this.updateGame}/>
  }
});

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<Game />, document.getElementById('main'))
});
