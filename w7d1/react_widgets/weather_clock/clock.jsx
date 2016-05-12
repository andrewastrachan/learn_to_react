var React = require('react');

var Clock = React.createClass({
  getInitialState: function() {
    return ({currentTime: (new Date).toLocaleTimeString()})
  },

  componentDidMount: function() {
    setInterval(function() {
      this.setState({currentTime: (new Date).toLocaleTimeString()})
    }.bind(this), 1000)
  },

  render: function() {
    return <div>Current Time: {this.state.currentTime}</div>
  }
});

module.exports = Clock;
