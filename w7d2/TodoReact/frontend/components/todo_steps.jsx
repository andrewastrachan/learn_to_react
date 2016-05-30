var React = require('react'),
    TodoStep = require('./todo_step')

var TodoSteps = React.createClass({
  getInitialState: function() {
    return {todoSteps: this.props.todoStepStore.all(this.props.todo.id)}
  },

  componentDidMount: function() {
    this.props.todoStepStore.addChangedEventHandeler(this.todoStepsChanged)
    this.props.todoStepStore.fetch(this.props.todo.id)
  },

  componentWillUnmount: function() {
    this.props.todoStepStore.removeChangedEventHandeler(this.todoStepsChanged)
  },

  todoStepsChanged: function() {
    this.setState({todoSteps: this.props.todoStepStore.all(this.props.todo.id)})
  },

  render: function() {
    return (
      <div>
        {
          this.state.todoSteps.map(function(todoStep, idx) {
            return <TodoStep key={todoStep.id} idx={idx} todoStep={todoStep} todoStepStore={this.props.todoStepStore}/>
          }.bind(this))
        }
      </div>
    )
  }
})

module.exports = TodoSteps
