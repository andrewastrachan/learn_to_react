var ApplicationDispatcher = require('./dispatcher/Dispatcher'),
    Note                  = require('./util/Note'),
    ORGANKEYS             = require('./constants/OrganKeys'),
    KeyStore              = require('./stores/KeyStore'),
    React                 = require('react'),
    ReactDOM              = require('react-dom'),
    OrganKey              = require('./components/OrganKey')

require('./util/KeyListener')

var OrganGrinder = React.createClass({
  getInitialState: function() {
    return {keys: this.props.KeyStore.all()}
  },

  componentDidMount: function() {
    this.props.KeyStore.addListener(this.keysChanged)
  },

  keysChanged: function() {
    this.setState({keys: this.props.KeyStore.all()})
  },

  render: function() {
    var organKeys = this.props.ORGANKEYS.map(function(key) {
      return <OrganKey key={key} keyName={key} keys={this.state.keys} />
    }.bind(this))

    return (
            <div>
              <ul>
                {organKeys}
              </ul>
            </div>
            )
  }
})

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <OrganGrinder KeyStore={KeyStore} ORGANKEYS={ORGANKEYS}/>,
    document.getElementById('content')
  )
})
