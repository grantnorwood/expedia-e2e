import React, {Component} from 'react';
import {Jumbotron, Button, Grid, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import TasksList from '../TasksList/TasksList';
import TravelAlertsList from '../TravelAlertsList/TravelAlertsList';
import TripsList from '../TripsList/TripsList';

import tasks from '../../data/tasks.json';
import travelAlerts from '../../data/travelAlerts.json';
import trips from '../../data/trips.json';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>{'Did you remember your toothbrush?'}</h1>
                    <p>
                        <strong>V<small>e</small>rbo</strong> is a simple app for making sure you're perfectly prepared for your Vaction Rental experience.
                    </p>
                    <br />
                    <p>
                        <Link to="/trips/new"><Button bsStyle="primary" bsSize="large">Plan your next trip!</Button></Link>
                        &nbsp;&nbsp;or <Link to="/trips">see the trips you've already planned</Link>
                    </p>
                </Jumbotron>
                <Grid>
                    <Row>
                        <Col xs={12} md={6}>
                            <h2>Coming Up ...</h2>

                            <TasksList tasks={tasks} />
                        </Col>
                        <Col xs={12} md={6}>
                            <h2>Travel Alerts</h2>

                            <TravelAlertsList travelAlerts={travelAlerts} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                            <h2>Your Trips</h2>

                            <TripsList trips={trips} />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default HomePage;
