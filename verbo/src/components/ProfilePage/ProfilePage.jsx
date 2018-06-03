import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {PageHeader, Form, FormGroup, Col, FormControl, Button, ControlLabel, Alert} from 'react-bootstrap';

// For demo purposes, just use Nina's mock object to populate the page state.  
// (It's duplicated because can't import from the mock json file from outside of "src/")
import Nina from '../../data/personas/nina/persona.json'

class ProfilePage extends Component {
    constructor() {
        super();

        // Set default state.
        this.state = {
            profile: Nina,
            saved: false
        };
    }

    onFirstNameChange = (ev) => {
        var newFirstName = ev.target.value;
        var profile = this.state.profile;

        profile.firstName = newFirstName;

        this.setState({
            profile
        })
    }

    onLastNameChange = (ev) => {
        var newLastName = ev.target.value;
        var profile = this.state.profile;

        profile.lastName = newLastName;

        this.setState({
            profile
        })
    }

    onEmailChange = (ev) => {
        var newEmail = ev.target.value;
        var profile = this.state.profile;

        profile.email = newEmail;

        this.setState({
            profile
        })
    }

    onBioChange = (ev) => {
        var newBio = ev.target.value;
        var profile = this.state.profile;

        profile.bio = newBio;

        this.setState({
            profile
        })
    }

    onFormSubmit = (ev) => {
        ev.preventDefault();

        // For demo purposes, we'll simply assume we've successfully saved the data.
        this.setState({
            saved: true
        });

        return false;
    }

    renderAlert = () => {
        if (this.state.saved === true) {
            return (
                <Alert bsStyle="success">
                        <strong>You've successfully saved your profile!</strong> Want to <Link to="/trips">see the trips you've already planned</Link>?
                </Alert>
            );
        }

        return null;
    }

    render() {
        return (
            <div>
                <PageHeader>
                    {'Nina\'s Profile'}
                </PageHeader>
                <Form horizontal onSubmit={this.onFormSubmit}>
                    <FormGroup controlId="firstName">
                        <Col componentClass={ControlLabel} sm={2}>
                            First Name
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="First Name" value={this.state.profile.firstName} onChange={this.onFirstNameChange} />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="lastName">
                        <Col componentClass={ControlLabel} sm={2}>
                            Last Name
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="Last Name" value={this.state.profile.lastName} onChange={this.onLastNameChange} />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="email">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={10}>
                            <FormControl type="email" placeholder="Email" value={this.state.profile.email} onChange={this.onEmailChange} />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="bio">
                        <Col componentClass={ControlLabel} sm={2}>
                            Bio
                        </Col>
                        <Col sm={10}>
                            <FormControl
                                componentClass="textarea"
                                placeholder=""
                                value={this.state.profile.bio}
                                rows={4}
                                onChange={this.onBioChange}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="saveButton">
                        <Col smOffset={2} sm={10}>
                            <Button type="submit" id="saveButton">Save</Button>
                        </Col>
                    </FormGroup>
                </Form>
                {this.renderAlert()}
            </div>
        );
    }
}

export default ProfilePage;
