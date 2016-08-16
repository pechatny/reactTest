var React = require('react');

var Three = React.createClass({
    render: function () {
        return (
            <section id="three" className="wrapper style3 special">
                <div className="container">
                    <header className="major">
                        <h2>Consectetur adipisicing elit</h2>
                        <p>Lorem ipsum dolor sit amet. Delectus consequatur, similique quia!</p>
                    </header>
                </div>
                <div className="container 50%">
                    <form action="#" method="post">
                        <div className="row uniform">
                            <div className="6u 12u$(small)">
                                <input name="name" id="name" value="" placeholder="Name" type="text"/>
                            </div>
                            <div className="6u$ 12u$(small)">
                                <input name="email" id="email" value="" placeholder="Email" type="email"/>
                            </div>
                            <div className="12u$">
                                <textarea name="message" id="message" placeholder="Message" rows="6">123</textarea>
                            </div>
                            <div className="12u$">
                                <ul className="actions">
                                    <li><input value="Send Message" className="special big" type="submit"/></li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
});

module.exports = Three;
