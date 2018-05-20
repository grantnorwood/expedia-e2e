import React, {Component} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class PageNavbar extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/"><strong>v<small>e</small>rbo</strong></a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown eventKey={1} title="Trips" id="nav-dropdown-trips">
                            <LinkContainer to="/trips">
                                <MenuItem eventKey={1.1}>My trips</MenuItem>
                            </LinkContainer>
                            <MenuItem divider />
                            <LinkContainer to="/trips/new">
                                <MenuItem eventKey={1.2}>Plan a new trip ...</MenuItem>
                            </LinkContainer>
                        </NavDropdown>
                        <NavDropdown eventKey={2} title="Tasks" id="nav-dropdown-tasks">
                            <LinkContainer to="/tasks">
                                <MenuItem eventKey={1.1}>My tasks</MenuItem>
                            </LinkContainer>
                            <MenuItem divider />
                            <LinkContainer to="/tasks/new">
                                <MenuItem eventKey={1.2}>Add a new task ...</MenuItem>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="/profile">
                            My Profile
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default PageNavbar;
