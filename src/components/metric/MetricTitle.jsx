var React = require('react');

var MetricTitle = React.createClass({
  render: function() {
    return(
      <p>{this.props.text}</p>
    );
  }
});

module.exports = MetricTitle;
