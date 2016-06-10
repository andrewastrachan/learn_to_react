var ApplicationDispatcher = require('./dispatcher/Dispatcher'),
    Note                  = require('./util/Note'),
    Tones                 = require('./constants/Tones'),
    KeyStore              = require('./stores/KeyStore'),
    React                 = require('react'),
    ReactDOM              = require('react-dom')

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
    var keyList = this.state.keys.map(function(key) {
      return <li key={key}>{key}</li>
    })
    return (
            <div>
              <ul>
                {keyList}
              </ul>
            </div>
            )
  }
})

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <OrganGrinder KeyStore={KeyStore}/>,
    document.getElementById('content')
  )
})
