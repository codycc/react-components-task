var React = require('react');

var WeatherCurrentTemp = React.createClass({
  render: function() {
    return (
      <h3 className = "text-center">{this.props.text}&#176;</h3>

    );
  }
});

module.exports = WeatherCurrentTemp;
