var React = require('react');
var WeatherCurrentTemp = require('./WeatherCurrentTemp.jsx');
var WeatherLocation = require('./WeatherLocation.jsx');

var Weather = React.createClass({
  render: function() {

    var divStyle = {
      background: '#f89406',
      color: '#ffffff'
    };

    return(
      <div style = {divStyle} className ="panel panel-default">
        <div className="panel-body">
          <WeatherCurrentTemp text={this.props.currentTemp} />
          <WeatherLocation text={this.props.location} />
        </div>
      </div>
    );
  }
});

module.exports = Weather;
