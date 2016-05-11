var React = require('react'),
    ReactDOM = require('react-dom'),
    Tabs = require('./tabs/tabs')

var Widgets = React.createClass({
  render: function() {
    var tabData = [
      {title: 'tab 1', content: 'tab 1 content'},
      {title: 'tab 2', content: 'tab 2 content'},
      {title: 'tab 3', content: 'tab 3 content'}
    ]
    return <Tabs tabs={tabData} />
  }
});

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<Widgets />, document.getElementById('main'));
});
