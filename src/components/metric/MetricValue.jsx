var React = require('react');
var MetricValue = React.createClass({
  render: function() {
    return (
      <h3>{this.props.text}</h3>
    );
  }
});
module.exports = MetricValue;
