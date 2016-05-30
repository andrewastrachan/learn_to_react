var React = require('react'),
    TodoSteps = require('./todo_steps'),
    TodoStepForm = require('./todo_step_form'),
    TodoStepStore = require('../stores/todo_step_store')

var TodoDetailView = React.createClass({
  render: function() {
    var height = this.props.visible ? 'auto' : '0px'
    return (
      <div style={{height: height, overflow: 'hidden'}}>
        <div>Todo body: {this.props.todo.body}</div>
        <TodoSteps todo={this.props.todo} todoStepStore={TodoStepStore}/>
        <TodoStepForm todo={this.props.todo} todoStepStore={TodoStepStore}/>
      </div>
    )
  }
})

module.exports = TodoDetailView
