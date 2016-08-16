var React = require('react');
var Menu = require('./Menu.react');

var Header = React.createClass({
    render: function(){
        return(
            <header id="header">
                <Menu />
            </header>
        );
    }
});


module.exports = Header;