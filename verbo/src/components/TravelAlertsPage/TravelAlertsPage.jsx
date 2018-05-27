import React, {Component} from 'react';
import {PageHeader} from 'react-bootstrap';
import TravelAlertsList from '../TravelAlertsList/TravelAlertsList';

import travelAlerts from '../../data/travelAlerts.json';

class TravelAlertsPage extends Component {
    render() {
        return (
            <div>
                <PageHeader>
                    My Travel Alerts
                </PageHeader>
                <TravelAlertsList travelAlerts={travelAlerts} />
            </div>
        );
    }
}

export default TravelAlertsPage;
