var React = require('react'),
    ReactDOM = require('react-dom'),
    TodoStore = require('./stores/todo_store'),
    TodoList = require('./components/todo_list')

var TodoReact = React.createClass({
  render: function() {
    return <TodoList todoStore={this.props.todoStore} />
  }
})

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<TodoReact todoStore={TodoStore} />, document.getElementById('main'))
})
