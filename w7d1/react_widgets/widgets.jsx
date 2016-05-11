var React = require('react'),
    ReactDOM = require('react-dom'),
    Header = require('./header')

var Widgets = React.createClass({
  getInitialState: function() {
    return {currentTab: 0}
  },

  setCurrentTab: function(index) {
    this.setState({currentTab: index});
  },

  render: function() {
    var headers = this.props.tabs.map(function(tab, index) {
      return <Header title={tab.title} index={index} selected={this.state.currentTab == index} setTabCallback={this.setCurrentTab}/>
    }.bind(this));

    return (
      <div>
        <ul>
          {headers}
        </ul>
        <div>{this.props.tabs[this.state.currentTab].content}</div>
      </div>
    );
  }
});

tabData = [
  {title: 'tab 1', content: 'tab 1 content'},
  {title: 'tab 2', content: 'tab 2 content'},
  {title: 'tab 3', content: 'tab 3 content'}
]

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<Widgets tabs={tabData}/>, document.getElementById('main'));
});



