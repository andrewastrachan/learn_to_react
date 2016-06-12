var React                 = require('react'),
    ReactDOM              = require('react-dom'),
    ApplicationDispatcher = require('./dispatcher/Dispatcher'),
    ORGANKEYS             = require('./constants/OrganKeys'),
    OrganKey              = require('./components/OrganKey'),
    Recorder              = require('./components/Recorder')
    JukeBox               = require('./components/JukeBox')

require('./util/KeyListener')

var OrganGrinder = React.createClass({
  render: function() {
    var organKeys = this.props.ORGANKEYS.map(function(key) {
      return <OrganKey key={key} keyName={key} />
    }.bind(this))

    return (
            <div>
              <ul>
                {organKeys}
              </ul>
              <Recorder/>
              <JukeBox />
            </div>
            )
  }
})

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <OrganGrinder ORGANKEYS={ORGANKEYS}/>,
    document.getElementById('content')
  )
})
