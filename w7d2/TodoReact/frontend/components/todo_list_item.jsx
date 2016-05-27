var React = require('react');

var TodoListItem = React.createClass({
  render: function() {
    return(
        <div>
          <li>{this.props.todo.title}</li>
          <li>{this.props.todo.body}</li>
        </div>
      )
  }
})

module.exports = TodoListItem;
