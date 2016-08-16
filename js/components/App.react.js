var React = require('react');
var ReactRouter = require('react-router');
var Header = require('./Header.react');
var Footer = require('./Footer.react');
var Banner = require('./Banner.react');
var { Router,
    Route,
    IndexRoute,
    IndexLink,
    Link } = ReactRouter;

var App = React.createClass({
    render: function () {
        return (
            <div>
                <Header />
                <Banner />
                <div>{this.props.children}</div>
                <Footer />
            </div>
        );
    }
});

module.exports = App;
