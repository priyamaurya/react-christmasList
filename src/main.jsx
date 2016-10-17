var React = require('react');
var ReactDOM = require('react-dom');

var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager headingColor="#bf2713" title="Christmas List"/>,document.getElementById('christmas'));
ReactDOM.render(<ListManager headingColor="#285915" title="Grocery List"/>,document.getElementById('grocery'));
ReactDOM.render(<ListManager headingColor="#d6d13b" title="Gifts List"/>,document.getElementById('gifts'));