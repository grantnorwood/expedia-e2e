import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {ListGroup, ListGroupItem} from "react-bootstrap";

class TripsList extends Component {
    static propTypes = {
        trips: PropTypes.array
    }

    render() {
        const trips = this.props.trips;

        if (trips) {
            
            return (
                <div className="trips-list">
                    <ListGroup>
                        {trips && trips.map((trip) => (
                            <LinkContainer key={trip.id} to={`/trips/${trip.id}`}>
                                <ListGroupItem header={trip.title}>
                                    {trip.location}
                                </ListGroupItem>
                            </LinkContainer>
                        ))}
                    </ListGroup>
                </div>
            );

        } else {

            return (
                <em>What a shame, you don't have any trips planned yet.  Want to <Link to="/trips/new">create one</Link>?</em>
            );

        }
    }
}

export default TripsList;
