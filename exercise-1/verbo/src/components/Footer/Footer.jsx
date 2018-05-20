import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer role="contentinfo">
                <hr />
                <Link to="/"><strong>V<small>e</small>rbo</strong></Link>
            </footer>
        );
    }
}

export default Footer;
