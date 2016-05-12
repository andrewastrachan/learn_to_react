var React = require('react'),
    ReactDOM = require('react-dom'),
    Tabs = require('./tabs/tabs'),
    Autocomplete = require('./autocomplete/autocomplete')

var Widgets = React.createClass({
  render: function() {
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

    return (
      <div>
        <Tabs tabs={tabData} />
        <Autocomplete searchItems={searchItems} />
      </div>
    )
  }
});

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<Widgets />, document.getElementById('main'));
});
