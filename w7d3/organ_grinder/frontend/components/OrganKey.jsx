var React = require('react')

var OrganKey = React.createClass({
  render: function() {
    return (
      <div>
        <li>{this.props.keyName}, playing: {this.props.keys.includes(this.props.keyName) ? 'true' : 'false'}</li>
      </div>
    )
  }
})

module.exports = OrganKey
