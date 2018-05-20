import React, {Component} from 'react';
import {PageHeader, Panel} from 'react-bootstrap';

import trips from '../../data/trips.json';

class TripPage extends Component {
    render() {
        const tripId = this.props.match.params.id;
        const trip = trips.find(((trip) => trip.id === parseInt(tripId, 10)));
        let bsStyle = 'default';

        if (trip.booked === true) {
            bsStyle = 'success';
        }

        return (
            <div>
                <PageHeader>
                    {trip.title}
                </PageHeader>
                <Panel bsStyle={bsStyle}>
                    <Panel.Heading>
                        <Panel.Title componentClass="h2">
                            {trip.title}{trip.booked === true ? <small>&nbsp;&nbsp;You're booked!</small> : ''}
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <p>
                            <em>{trip.location}</em>
                        </p>
                        <p>
                            {trip.description}
                        </p>
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}

export default TripPage;
