var React = require('react')

var TodoStep = React.createClass({
  handleToggleDone: function() {
    this.props.todoStepStore.toggleDone(this.props.todoStep)
  },

  handleDestroy: function() {
    this.props.todoStepStore.destroy(this.props.todoStep)
  },

  render: function() {
    return (
      <div>
        <div className='todo-step__body'>{this.props.idx + 1}: {this.props.todoStep.body}</div>
        <div className='todo-step__buttons'>
          <button onClick={this.handleToggleDone}>{this.props.todoStep.done ? 'Unfinish' : 'Finish'}</button>
          <button onClick={this.handleDestroy}>Delete</button>
        </div>

      </div>
    )
  }
})

module.exports = TodoStep
