var React = require('react')

var TodoStep = React.createClass({
  render: function() {
    return <div>{this.props.idx + 1}: {this.props.todoStep.body}</div>
  }
})

module.exports = TodoStep
