var React = require('react'),
    TodoListItem = require('./todo_list_item')

var TodoList = React.createClass({
  getInitialState: function() {
    return {todos: this.props.todoStore.all()}
  },

  componentDidMount: function() {
    this.props.todoStore.addChangedEventHandeler(this.todosChanged)
    this.props.todoStore.fetch()
  },

  componentWillUnmount: function() {
    this.props.todoStore.removeChangedEventHandeler(this.todosChanged)
  },

  todosChanged: function() {
    this.setState({todos: this.props.todoStore.all()})
  },

  render: function() {
    return (
      <div>
        {
          this.state.todos.map(function(todo) {
            return <TodoListItem todo={todo} todoStore={this.props.todoStore} key={todo.id}/>
          }.bind(this))
        }
      </div>
    )
  }
})

module.exports = TodoList
