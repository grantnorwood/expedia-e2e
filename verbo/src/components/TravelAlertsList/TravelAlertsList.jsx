import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {LinkContainer} from 'react-router-bootstrap';
import {ListGroup, ListGroupItem} from "react-bootstrap";

class TravelAlertsList extends Component {
    static propTypes = {
        travelAlerts: PropTypes.array
    }

    render() {
        const travelAlerts = this.props.travelAlerts;

        if (travelAlerts) {
            
            return (
                <div className="travel-alerts-list">
                    <ListGroup>
                        {travelAlerts && travelAlerts.map((travelAlert) => (
                            <LinkContainer key={travelAlert.id} to={`/travel-alerts/${travelAlert.id}`}>
                                <ListGroupItem header={travelAlert.title}>
                                    {travelAlert.description}
                                </ListGroupItem>
                            </LinkContainer>
                        ))}
                    </ListGroup>
                </div>
            );

        } else {
            return (
                <em>Great, you have zero travel alerts for your upcoming trips!</em>
            );
        }
    }
}

export default TravelAlertsList;
