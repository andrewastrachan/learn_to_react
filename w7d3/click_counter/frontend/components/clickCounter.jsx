var React = require("react"),
    ClickStore = require("../stores/clickStore.js");
    ClickActions = require('../actions/clickActions');

var ClickCounter = React.createClass({
  getInitialState: function(){
    return {count: ClickStore.count()};
  },
  _countChanged: function(){
    this.setState({count: ClickStore.count()});
  },
  componentDidMount: function () {
    ClickStore.addChangeHandler(this._countChanged);
  },
  componentWillUnmount: function() {
    ClickStore.removeChangeHandler(this._countChanged);
},
  click: function(e){
    e.preventDefault();
    ClickActions.increment();
  },
  render: function(){
    return (
      <div>
        <button onClick={this.click}>CLICK ME</button>
        <span>{this.state.count}</span>
      </div>
    );
  }
});

module.exports = ClickCounter;
