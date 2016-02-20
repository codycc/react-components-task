var React = require('react');
var MetricTitle = require('./MetricTitle.jsx');
var MetricValue = require('./MetricValue.jsx');




  var Metric = React.createClass({

    render: function() {
      
      var panelHeadingStyle = {
        height: 80,
        background: '#0096D0',
        color: '#ffffff'
      };

      if(this.props.headingColor){
        panelHeadingStyle.background = this.props.headingColor;
      };

      var panelBodyStyle = {
        height: 80,
      };

      return(
        <div className="panel panel-default">
          <div style={panelHeadingStyle} className="panel-heading">
            <MetricTitle text={this.props.title}/>
            <MetricValue text={this.props.value}/>
          </div>
          <div style={panelBodyStyle} className = "panel-body"></div>
        </div>


      );


    }
  });

  module.exports = Metric;
