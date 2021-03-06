var React = require('react'),
    ReactDOM = require('react-dom'),
    Tabs = require('./tabs/tabs'),
    Autocomplete = require('./autocomplete/autocomplete'),
    WeatherClock = require('./weather_clock/weather_clock')

var Widgets = React.createClass({
  render: function() {
    return (
      <div>
        <Tabs tabs={this.props.tabData} />
        <Autocomplete searchItems={this.props.searchItems} />
        <WeatherClock />
      </div>
    )
  }
});

var tabData = [
  {title: 'tab 1', content: 'tab 1 content'},
  {title: 'tab 2', content: 'tab 2 content'},
  {title: 'tab 3', content: 'tab 3 content'}
]

var searchItems = [
  {name: 'Andrew Strachan'},
  {name: 'Ben Whitley'},
  {name: 'Christian Davis'},
  {name: 'Edward McDonald'}
]

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<Widgets tabData={tabData} searchItems={searchItems} />, document.getElementById('main'));
});
