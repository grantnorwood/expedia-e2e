import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer role="contentinfo">
                <hr />
                <Link to="/"><strong>V<small>e</small>rbo</strong></Link>
                <br />
                <p>
                    &copy; 2018 Legal Dept, Inc. All Rights Reserved.
                </p>
            </footer>
        );
    }
}

export default Footer;
