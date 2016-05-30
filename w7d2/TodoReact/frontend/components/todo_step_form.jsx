var React = require('react')

var TodoStepForm = React.createClass({
  getInitialState: function() {
    return {body: '', todo_id: this.props.todo.id}
  },

  handleBodyChange: function(e) {
    e.preventDefault()
    this.setState({body: e.currentTarget.value, todo_id: this.state.todo_id})
  },

  handleSubmit: function(e) {
    e.preventDefault()
    this.props.todoStepStore.create(this.state)
    this.setState({body: ''})
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.body} onChange={this.handleBodyChange} />
        <button to='submit'>New Step</button>
      </form>
    )
  }
})

module.exports = TodoStepForm
