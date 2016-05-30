var React = require('react'),
    TodoStep = require('./todo_step'),
    TodoStepStore = require('../stores/todo_step_store')

var TodoSteps = React.createClass({
  getInitialState: function() {
    return {todoSteps: TodoStepStore.all(this.props.todo.id)}
  },

  componentDidMount: function() {
    TodoStepStore.addChangedEventHandeler(this.todoStepsChanged)
    TodoStepStore.fetch(this.props.todo.id)
  },

  componentWillUnmount: function() {
    TodoStepStore.removeChangedEventHandeler(this.todoStepsChanged)
  },

  todoStepsChanged: function() {
    this.setState({todoSteps: TodoStepStore.all(this.props.todo.id)})
  },

  render: function() {
    return (
      <div>
        {
          this.state.todoSteps.map(function(todoStep, idx) {
            return <TodoStep key={todoStep.id} idx={idx} todoStep={todoStep}/>
          })
        }
      </div>
    )
  }
})

module.exports = TodoSteps
