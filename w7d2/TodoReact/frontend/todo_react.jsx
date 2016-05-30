var React = require('react'),
    ReactDOM = require('react-dom'),
    TodoStore = require('./stores/todo_store'),
    TodoList = require('./components/todo_list'),
    TodoForm = require('./components/todo_form')

var TodoReact = React.createClass({
  render: function() {
    return (
        <div>
          <TodoList todoStore={this.props.todoStore} />
          <TodoForm todoStore={this.props.todoStore} />
        </div>
      )
  }
})

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<TodoReact todoStore={TodoStore} />, document.getElementById('main'))
})
