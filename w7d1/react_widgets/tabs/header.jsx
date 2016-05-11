var React = require('react');

var Header = React.createClass({
  handleClick: function() {
    event.preventDefault();
    this.props.setTabCallback(this.props.index);
  },

  render: function() {
    return(
      <a href='#' className={this.props.selected ? 'tab__selected' : ''} onClick={this.handleClick}>
        <li>{this.props.title}</li>
      </a>
    )
  }
});

module.exports = Header
