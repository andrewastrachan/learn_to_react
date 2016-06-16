var React     = require('react'),
    ORGANKEYS = require('./constants/OrganKeys'),

var OrganKey = React.createClass({
  render: function() {
    var organKeys = ORGANKEYS.map(function(key) {
      return <OrganKey key={key} keyName={key} />
    }.bind(this))

    return <ul>{organKeys}</ul>
  }
})


module.exports = OrganKeys
