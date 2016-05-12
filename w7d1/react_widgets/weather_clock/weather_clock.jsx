var React = require('react'),
    Clock = require('./clock')

var WeatherClock = React.createClass({
  render: function() {
    return (
      <div>
        <div>Weather Clock goes here</div>
        <Clock />
      </div>
    )
  }
});

module.exports = WeatherClock;
