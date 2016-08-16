var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var App = require('./components/App.react');
var Home = require('./components/Home.react');
var One = require('./components/One.react');
var Two = require('./components/Two.react');
var Three = require('./components/Three.react');
var { Router,
	Route,
	IndexRoute,
	IndexLink,
	Link } = ReactRouter;


var Main = React.createClass({
	render: function(){
		return	(
			<Router>
				<Route path="/" component={App}>
					<IndexRoute component={One}/>
					<Route path="generic" component={Two} />
					<Route path="elements" component={Three} />
				</Route>
			</Router>
		);
	}
});

ReactDOM.render(<Main />, document.getElementById('app'));
