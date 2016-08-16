var React = require('react');
var Link = require('react-router').Link;

var Menu = React.createClass({
    render: function () {
        return (
            <div>
                <h1><a href="index.html">Transit</a></h1>
                <nav id="nav">
                    <ul>
                        <li><Link to="/" activeClassName="active">Home</Link></li>
                        <li><Link to="/generic" activeClassName="active">Generic</Link></li>
                        <li><Link to="/elements" activeClassName="active">Elements</Link></li>
                        <li><Link to="/signUp" activeClassName="active">Sign Up</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
});

module.exports = Menu;
