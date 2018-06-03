import React, {Component} from 'react';
import {PageHeader, Form, FormGroup, Col, FormControl, Button, ControlLabel} from 'react-bootstrap';

class NewTaskPage extends Component {
    render() {
        return (
            <div>
                <PageHeader>
                    Add a new task
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

                    <FormGroup controlId="status">
                        <Col componentClass={ControlLabel} sm={2}>
                            Status
                        </Col>
                        <Col sm={10}>
                            <FormControl componentClass="select" placeholder="Choose as status ...">
                                <option value="todo">to-do</option>
                                <option value="complete">complete</option>
                                <option value="overdue">overdue</option>
                            </FormControl>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="dueDate">
                        <Col componentClass={ControlLabel} sm={2}>
                            Due date
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="(e.g., Jun 19, 2018)" />
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

export default NewTaskPage;
