var React = require('react');

var TodoForm = React.createClass({
  getInitialState: function() {
    return {title: '', body: ''}
  },

  updateTitle: function(e) {
    this.setState({title: e.currentTarget.value, body: this.state.body})
  },

  updateBody: function(e) {
    this.setState({body: e.currentTarget.value, title: this.state.title})
  },

  submitForm: function(e) {
    e.preventDefault()
    this.props.todoStore.create(this.state)
    this.setState({title: '', body: ''})
  },

  render: function() {
    return (
      <form onSubmit={this.submitForm}>
        <h3>New Todo</h3>
        <div>Title:</div>
        <input value={this.state.title} onChange={this.updateTitle} />
        <div>Body:</div>
        <input value={this.state.body} onChange={this.updateBody} />
        <button to='submit'>Submit</button>
      </form>
    )
  }
})

module.exports = TodoForm
