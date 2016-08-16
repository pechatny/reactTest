var React = require('react');

var Two = React.createClass({
    render: function () {
        return (
            <section id="two" className="wrapper style2 special">
                <div className="container">
                    <header className="major">
                        <h2>Lorem ipsum dolor sit</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, autem.</p>
                    </header>
                    <section className="profiles">
                        <div className="row">
                            <section className="3u 6u(medium) 12u$(xsmall) profile">
                                <img src="images/profile_placeholder.gif" alt="" />
                                <h4>Lorem ipsum</h4>
                                <p>Lorem ipsum dolor</p>
                            </section>
                            <section className="3u 6u$(medium) 12u$(xsmall) profile">
                                <img src="images/profile_placeholder.gif" alt="" />
                                <h4>Voluptatem dolores</h4>
                                <p>Ullam nihil repudi</p>
                            </section>
                            <section className="3u 6u(medium) 12u$(xsmall) profile">
                                <img src="images/profile_placeholder.gif" alt="" />
                                <h4>Doloremque quo</h4>
                                <p>Harum corrupti quia</p>
                            </section>
                            <section className="3u$ 6u$(medium) 12u$(xsmall) profile">
                                <img src="images/profile_placeholder.gif" alt="" />
                                <h4>Voluptatem dicta</h4>
                                <p>Et natus sapiente</p>
                            </section>
                        </div>
                    </section>
                    <footer>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore illum, temporibus veritatis eligendi, aliquam, dolor enim itaque veniam aut eaque sequi qui quia vitae pariatur repudiandae ab dignissimos ex!</p>
                        <ul className="actions">
                            <li>
                                <a href="#" className="button big">Lorem ipsum dolor sit</a>
                            </li>
                        </ul>
                    </footer>
                </div>
            </section>
        );
    }
});

module.exports = Two;
