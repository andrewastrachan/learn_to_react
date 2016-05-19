var React = require('react');

var Modal = React.createClass({
  render: function() {
    var modalContent
    var className = 'modal'
    var board = this.props.board
    if (board.won() || board.lost()) {
      className = className + ' modal--visible'
      modalContent = (board.won() ? 'You Win!' : 'You Lose :(')
    }

    return (
      <div className={className}>
        <div className='modal__content'>{modalContent}</div>
        <button className='modal__button' onClick={this.props.restartGameCallback}>Restart</button>
      </div>
    )
  }
})

module.exports = Modal
