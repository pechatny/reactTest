var React = require('react');
var Menu = require('./Menu.react');

var Banner = React.createClass({
    render: function(){
        return(
            <section id="banner">
                <h2>Hi. This is Transit.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <ul className="actions">
                    <li>
                        <a href="#" className="button big">Lorem ipsum dolor</a>
                    </li>
                </ul>
            </section>
        );
    }
});


module.exports = Banner;