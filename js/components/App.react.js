var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var ReactRouter = require('react-router');
var Header = require('./Header.react');
var Footer = require('./Footer.react');
var Banner = require('./Banner.react');
var { Router,
    Route,
    IndexRoute,
    IndexLink,
    Link,
    RouteHandler } = ReactRouter;

var App = React.createClass({
    render: function () {
        var path = this.props.location.pathname;
        var segment = path.split('/')[1] || 'root';
        return (
            <div>
                <Header />
                <Banner />
                <ReactCSSTransitionGroup component="section" transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                    {React.cloneElement(this.props.children, { key: segment })}
                </ReactCSSTransitionGroup>
                <Footer />
            </div>
        );
    }
});

module.exports = App;
