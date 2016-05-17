var React = require('react'),
    ReactDOM = require('react-dom'),
    Minesweeper = require('./minesweeper'),
    Board = require('./components/board')

var Game = React.createClass({
  getInitialState: function() {
    return {game: new Minesweeper.Board(10, 10)}
  },

  updateGame: function() {
    //Updates the board state
  },

  render: function() {
    return <Board board={this.state.game.grid} updateGameCallback={this.updateGame}/>
  }
});

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<Game />, document.getElementById('main'))
});
