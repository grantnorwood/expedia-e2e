import React, {Component} from 'react';
import {PageHeader} from 'react-bootstrap';
import TripsList from '../TripsList/TripsList';

import trips from '../../data/trips.json';

class TripsPage extends Component {
    render() {
        return (
            <div>
                <PageHeader>
                    My Trips
                </PageHeader>
                <TripsList trips={trips} />
            </div>
        );
    }
}

export default TripsPage;
