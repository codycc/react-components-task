var React = require('react');
var HighlightTitle = require('./HighlightTitle.jsx');
var HighlightValue = require('./HighlightValue.jsx');

var Highlight = React.createClass({
  render: function(){
    return (
      <div className = "panel panel-default">
          <div className = "panel-body">
            <HighlightValue text={this.props.value} />
            <HighlightTitle text={this.props.title} />
          </div>
      </div>
    );

  }

});

module.exports = Highlight;
