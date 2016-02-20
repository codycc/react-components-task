var React = require('react');

var StatTitle = React.createClass ({
  render: function() {
    return (
      <p className = "text-center">{this.props.text}</p>

    );
  }

});

module.exports = StatTitle;
