var React = require('react'),
    ReactDOM = require('react-dom'),
    Minesweeper = require('./minesweeper'),
    Board = require('./components/board'),
    Modal = require('./components/modal')

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
    return(
      <div>
        <Board board={this.state.board} updateGameCallback={this.updateGame}/>
        <Modal board={this.state.board}/>
      </div>
    )
  }
});

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<Game />, document.getElementById('main'))
});
