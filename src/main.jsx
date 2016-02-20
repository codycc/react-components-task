var React = require('react');
var ReactDOM = require('react-dom');
var Highlight = require('./components/highlight/Highlight.jsx');
var Metric = require('./components/metric/Metric.jsx');
var StatList = require('./components/statList/StatList.jsx');
var Weather = require('./components/weather/Weather.jsx');

var statData = [
  {
    "id": 1,
    "title": "Shot Views",
    "value": 15080
  },
  {
    "id": 2,
    "title": "Likes",
    "value": 12000
  },
  {
    "id": 3,
    "title": "Comments",
    "value": 5100
  }
];

ReactDOM.render(<Highlight title="New followers added this month" value="20"/>, document.getElementById('highlight-1'));
ReactDOM.render(<Highlight title="Average Monthly Income" value="$1250"/>, document.getElementById('highlight-2'));
ReactDOM.render(<Highlight title="Yearly Income Goal" value="$13865"/>, document.getElementById('highlight-3'));

ReactDOM.render(<StatList items={statData}/>, document.getElementById('stat-list-1'));
ReactDOM.render(<StatList items={statData} headingColor="#CD59AE"/>, document.getElementById('stat-list-2'));

ReactDOM.render(<Weather currentTemp="30" location="Toronto" />, document.getElementById('weather'));


ReactDOM.render(<Metric title="New Visitors" value="1.5k"/>, document.getElementById('metric-1'));
ReactDOM.render(<Metric title="Bounce Rate" value="50%" headingColor="#B28AD6"/>, document.getElementById('metric-2'));
ReactDOM.render(<Metric title="Searches" value="28%" headingColor="#FF4826"/>, document.getElementById('metric-3'));
ReactDOM.render(<Metric title="Traffic" value="140.5kb"  headingColor="#63C254"/>, document.getElementById('metric-4'));
