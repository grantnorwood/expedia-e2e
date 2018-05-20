import React, {Component} from 'react';
import {PageHeader, Panel} from 'react-bootstrap';

import travelAlerts from '../../data/travelAlerts.json';

class TravelAlertPage extends Component {
    render() {
        const travelAlertId = this.props.match.params.id;
        const travelAlert = travelAlerts.find(((travelAlert) => travelAlert.id === parseInt(travelAlertId, 10)));
        let bsStyle = 'default';

        if (travelAlert.priority === 'critical') {
            bsStyle = 'danger';
        }

        return (
            <div>
                <PageHeader>
                    {travelAlert.title}
                </PageHeader>
                <Panel bsStyle={bsStyle}>
                    <Panel.Heading>
                        <Panel.Title componentClass="h2">
                            {travelAlert.priority === 'critical' ? 'Important!' : ''}
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <p>
                            {travelAlert.description}
                        </p>
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}

export default TravelAlertPage;
