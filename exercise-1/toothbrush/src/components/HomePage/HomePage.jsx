import React, {Component} from 'react';
import {Jumbotron, Button, Grid, Row, Col} from 'react-bootstrap';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>{'Did you remember your toothbrush?'}</h1>
                    <p>
                        A simple app for making sure you're perfectly prepared for your Vaction Rental experience.
                    </p>
                    <p>
                        <Button bsStyle="primary">Start planning your next trip!</Button>
                    </p>
                </Jumbotron>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <h2>Coming Up</h2>
                            <p>
                                <ul>
                                    <li>Renew passport</li>
                                    <li>Book airport transportation to VR</li>
                                    <li>Read the check-in instructions that Paolo sent me</li>
                                </ul>
                            </p>
                        </Col>
                        <Col xs={6} md={4}>
                            <h2>Travel Alerts</h2>
                            <p>
                                <ul>
                                    <li>
                                        The Royal Wedding is causing extra transportation delays near the palace.  
                                        Please be prepared to find alternate routes.
                                    </li>
                                </ul>
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default HomePage;
