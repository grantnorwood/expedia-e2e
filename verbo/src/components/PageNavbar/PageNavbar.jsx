import React, {Component} from 'react';
import {Badge, MenuItem, Nav, NavDropdown, NavItem, Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from "react-router-dom";

import travelAlerts from '../../data/travelAlerts.json';

class PageNavbar extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Verbo</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown eventKey={1} title="Trips" id="nav-dropdown-trips">
                            <LinkContainer to="/trips">
                                <MenuItem eventKey={1.1}>My trips</MenuItem>
                            </LinkContainer>
                            <LinkContainer to="/trips/new">
                                <MenuItem eventKey={1.2}>Plan a new trip ...</MenuItem>
                            </LinkContainer>
                        </NavDropdown>
                        <NavDropdown eventKey={2} title="Tasks" id="nav-dropdown-tasks">
                            <LinkContainer to="/tasks">
                                <MenuItem eventKey={2.1}>My tasks</MenuItem>
                            </LinkContainer>
                            <LinkContainer to="/tasks/new">
                                <MenuItem eventKey={2.2}>Add a new task ...</MenuItem>
                            </LinkContainer>
                        </NavDropdown>
                        <LinkContainer to="/travel-alerts">
                            <NavItem eventKey={3}>
                                Travel Alerts <Badge>{travelAlerts.length}</Badge>
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav pullRight>
                        <LinkContainer to="/profile">
                            <NavItem eventKey={4}>
                                My Profile
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default PageNavbar;
