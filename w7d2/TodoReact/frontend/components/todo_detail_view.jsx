var React = require('react'),
    TodoSteps = require('./todo_steps')

var TodoDetailView = React.createClass({
  render: function() {
    var height = this.props.visible ? 'auto' : '0px'
    return (
      <div style={{height: height, overflow: 'hidden'}}>
        <div>Todo body: {this.props.todo.body}</div>
        <TodoSteps todo={this.props.todo}/>
      </div>
    )
  }
})

module.exports = TodoDetailView
