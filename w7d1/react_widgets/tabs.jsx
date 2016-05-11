var React = require('react'),
    Header = require('./header')

var Tabs = React.createClass({
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

module.exports = Tabs
