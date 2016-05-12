var React = require('react');

var Autocomplete = React.createClass({
  getInitialState: function() {
    return {query: ''}
  },
  search: function(e) {
    e.preventDefault();
    this.setState({query: e.target.value});
  },
  render: function() {
    var items = this.props.searchItems;
    if (this.state.query) {
      items = items.filter(function(item) {
        return item.name.toLowerCase().match(this.state.query.toLowerCase())
      }.bind(this));
    }

    return (
      <div>
        <input onChange={this.search} value={this.state.query}/>
        <ul>
          {
            items.map(function(item) {
              return <li>{item.name}</li>
            })
          }
        </ul>
      </div>
    )
  }
});

module.exports = Autocomplete;
