import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class PageNavbar extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">VRBO-2-GO</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown eventKey={1} title="Trips" id="nav-dropdown-trips">
                            <MenuItem eventKey={1.1}>My trips</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={1.2}>Plan a new trip ...</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={2} title="Tasks" id="nav-dropdown-tasks">
                            <MenuItem eventKey={2.1}>My tasks</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={2.2}>Add a new task ...</MenuItem>
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
