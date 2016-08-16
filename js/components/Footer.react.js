var React = require('react');

var Footer = React.createClass({
    render: function(){
        return(
            <footer id="footer">
                <div className="container">
                    <section className="links">
                        <div className="row">
                            <section className="3u 6u(medium) 12u$(small)">
                                <h3>Lorem ipsum dolor</h3>
                                <ul className="unstyled">
                                    <li><a href="#">Lorem ipsum dolor sit</a></li>
                                    <li><a href="#">Nesciunt itaque, alias possimus</a></li>
                                    <li><a href="#">Optio rerum beatae autem</a></li>
                                    <li><a href="#">Nostrum nemo dolorum facilis</a></li>
                                    <li><a href="#">Quo fugit dolor totam</a></li>
                                </ul>
                            </section>
                            <section className="3u 6u$(medium) 12u$(small)">
                                <h3>Culpa quia, nesciunt</h3>
                                <ul className="unstyled">
                                    <li><a href="#">Lorem ipsum dolor sit</a></li>
                                    <li><a href="#">Reiciendis dicta laboriosam enim</a></li>
                                    <li><a href="#">Corporis, non aut rerum</a></li>
                                    <li><a href="#">Laboriosam nulla voluptas, harum</a></li>
                                    <li><a href="#">Facere eligendi, inventore dolor</a></li>
                                </ul>
                            </section>
                            <section className="3u 6u(medium) 12u$(small)">
                                <h3>Neque, dolore, facere</h3>
                                <ul className="unstyled">
                                    <li><a href="#">Lorem ipsum dolor sit</a></li>
                                    <li><a href="#">Distinctio, inventore quidem nesciunt</a></li>
                                    <li><a href="#">Explicabo inventore itaque autem</a></li>
                                    <li><a href="#">Aperiam harum, sint quibusdam</a></li>
                                    <li><a href="#">Labore excepturi assumenda</a></li>
                                </ul>
                            </section>
                            <section className="3u$ 6u$(medium) 12u$(small)">
                                <h3>Illum, tempori, saepe</h3>
                                <ul className="unstyled">
                                    <li><a href="#">Lorem ipsum dolor sit</a></li>
                                    <li><a href="#">Recusandae, culpa necessita nam</a></li>
                                    <li><a href="#">Cupiditate, debitis adipisci blandi</a></li>
                                    <li><a href="#">Tempore nam, enim quia</a></li>
                                    <li><a href="#">Explicabo molestiae dolor labore</a></li>
                                </ul>
                            </section>
                        </div>
                    </section>
                    <div className="row">
                        <div className="8u 12u$(medium)">
                            <ul className="copyright">
                                <li>&copy; Untitled. All rights reserved.</li>
                                <li>Design: <a href="http://templated.co">TEMPLATED</a></li>
                                <li>Images: <a href="http://unsplash.com">Unsplash</a></li>
                            </ul>
                        </div>
                        <div className="4u$ 12u$(medium)">
                            <ul className="icons">
                                <li>
                                    <a className="icon rounded fa-facebook"><span className="label">Facebook</span></a>
                                </li>
                                <li>
                                    <a className="icon rounded fa-twitter"><span className="label">Twitter</span></a>
                                </li>
                                <li>
                                    <a className="icon rounded fa-google-plus"><span className="label">Google+</span></a>
                                </li>
                                <li>
                                    <a className="icon rounded fa-linkedin"><span className="label">LinkedIn</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
});


module.exports = Footer;