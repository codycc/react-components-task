var React = require('react');
var StatItem = require('./StatItem.jsx');


var StatList = React.createClass({
    render: function() {
      var createItem = function(item) {
        return <StatItem key={item.id} title={item.title} value={item.value}/>;
      };

      var panelHeadingStyle = {
        height: 200,
        background: '#0096D0',
      };

      if(this.props.headingColor) {
        panelHeadingStyle.background = this.props.headingColor;
      };

      var panelBodyStyle = {
        color: '#ffffff',
        background: '#484D4D'
      };

      return(
        <div className = "panel panel-default">
            <div style={panelHeadingStyle} className="panel-heading"></div>
              <div style={panelBodyStyle} className="panel-body">
              {this.props.items.map(createItem)}
            </div>
        </div>
      );

    }
});

module.exports = StatList;
