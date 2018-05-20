import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import {LinkContainer} from 'react-router-bootstrap';
import {ListGroup, ListGroupItem} from "react-bootstrap";

class TasksList extends Component {
    static propTypes = {
        tasks: PropTypes.array
    }

    render() {
        const tasks = this.props.tasks;

        if (tasks) {

            return (
                <div className="tasks-list">
                    <ListGroup>
                        {tasks && tasks.map((task) => {
                            let bsStyle = null;

                            if (task.status === 'overdue') {
                                bsStyle = 'danger';
                            } else if (task.status === 'complete') {
                                bsStyle = 'success';
                            }

                            return (
                                <LinkContainer key={task.id} to={`/tasks/${task.id}`}>
                                    <ListGroupItem header={task.title} bsStyle={bsStyle}>
                                        <em>Due: {task.dueDate}</em>
                                    </ListGroupItem>
                                </LinkContainer>
                            );
                        })}
                    </ListGroup>
                </div>
            );

        } else {
            return (
                <em>Hmm, you don't seem to have any tasks.  <Link to="/tasks/new">Create one</Link>?</em>
            );
        }
    }
}

export default TasksList;
