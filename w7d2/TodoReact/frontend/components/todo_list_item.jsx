var React = require('react');

var TodoListItem = React.createClass({
  handleDestroy: function() {
    this.props.todoStore.destroy(this.props.todo)
  },

  render: function() {
    return(
        <div>
          <div>{this.props.todo.title}</div>
          <div>{this.props.todo.body}</div>
          <button onClick={this.handleDestroy}>Delete</button>
        </div>
      )
  }
})

module.exports = TodoListItem;
