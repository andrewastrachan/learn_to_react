var React = require('react')

var TodoDetailView = React.createClass({
  render: function() {
    var height = this.props.visible ? 'auto' : '0'
    return <div style={{height: height}}>{this.props.todo.body}</div>
  }
})

module.exports = TodoDetailView
