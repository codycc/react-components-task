var React = require('react');
var HighlightValue = React.createClass({
  render: function(){
    return (
      <h3>{this.props.text}</h3>
    );
  }

});

module.exports = HighlightValue;
