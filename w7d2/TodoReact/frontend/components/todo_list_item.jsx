var React = require('react'),
    TodoDetailView = require('./todo_detail_view')

var TodoListItem = React.createClass({
  getInitialState: function() {
    return {visible: false}
  },

  handleDestroy: function() {
    this.props.todoStore.destroy(this.props.todo)
  },

  handleToggleDone: function() {
    this.props.todoStore.toggleDone(this.props.todo)
  },

  toggleVisible: function(e) {
    e.preventDefault()
    this.setState({visible: !this.state.visible})
  },

  render: function() {
    return(
        <div>
          <a href='' onClick={this.toggleVisible} className='todo__title'>{this.props.todo.title}</a>
          <div className='todo__buttons'>
            <button onClick={this.handleToggleDone}>{this.props.todo.done ? 'Unfinish' : 'Finish'}</button>
            <button onClick={this.handleDestroy}>Delete</button>
          </div>
          <TodoDetailView todo={this.props.todo} visible={this.state.visible}/>
        </div>
      )
  }
})

module.exports = TodoListItem;
