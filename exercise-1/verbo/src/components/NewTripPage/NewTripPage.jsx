import React, {Component} from 'react';
import {PageHeader, Form, FormGroup, Col, FormControl, Checkbox, Button, ControlLabel} from 'react-bootstrap';

class NewTripPage extends Component {
    render() {
        return (
            <div>
                <PageHeader>
                    Plan a new trip
                </PageHeader>
                <Form horizontal>
                    <FormGroup controlId="title">
                        <Col componentClass={ControlLabel} sm={2}>
                            Title
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="Title" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="location">
                        <Col componentClass={ControlLabel} sm={2}>
                            Location
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="Location" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="booked">
                        <Col smOffset={2} sm={10}>
                            <Checkbox>I'm booked!</Checkbox>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit">Save</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default NewTripPage;
