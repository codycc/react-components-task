var React = require('react');

var HighlightTitle = React.createClass({
  render: function() {
    return (
      <p>{this.props.text}</p>
    )

  }
});

module.exports = HighlightTitle;
