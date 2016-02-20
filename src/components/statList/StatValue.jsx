var React = require('react');

var StatValue = React.createClass({
  render: function() {
    return (
      <h3 className ="text-center">{this.props.text}</h3>


    );
  }

});
module.exports = StatValue;
