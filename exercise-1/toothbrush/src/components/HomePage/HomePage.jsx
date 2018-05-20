import React, {Component} from 'react';
import {Jumbotron, Button, Grid, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>{'Did you remember your toothbrush?'}</h1>
                    <p>
                        <strong>v<small>e</small>rbo</strong> is a simple app for making sure you're perfectly prepared for your Vaction Rental experience.
                    </p>
                    <br />
                    <p>
                        <Link to="/trips/new"><Button bsStyle="primary" bsSize="large">Plan your next trip!</Button></Link>
                    </p>
                </Jumbotron>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={6}>
                            <h2>Coming Up ...</h2>
                            <ul>
                                <li>Renew passport</li>
                                <li>Book airport transportation to VR</li>
                                <li>Read the check-in instructions that Paolo sent me</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={6}>
                            <h2>Travel Alerts</h2>
                            <ul>
                                <li>
                                    The Royal Wedding is causing extra transportation delays near the palace.  
                                    Please be prepared to find alternate routes.
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default HomePage;
