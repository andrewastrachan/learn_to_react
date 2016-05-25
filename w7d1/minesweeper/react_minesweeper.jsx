var React = require('react'),
    ReactDOM = require('react-dom'),
    Minesweeper = require('./minesweeper'),
    Board = require('./components/board'),
    Modal = require('./components/modal')

var Game = React.createClass({
  getInitialState: function() {
    return {board: new Minesweeper.Board(30, 100)}
  },

  updateGame: function(tile, flagging) {
    flagging ? tile.toggleFlag() : tile.explore()
    this.setState({board: this.state.board})
  },

  restartGame: function() {
    this.setState(this.getInitialState())
  },

  render: function() {
    return(
      <div>
        <Board board={this.state.board} updateGameCallback={this.updateGame}/>
        <Modal board={this.state.board} restartGameCallback={this.restartGame}/>
      </div>
    )
  }
});

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<Game />, document.getElementById('main'))
});
