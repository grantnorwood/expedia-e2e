import React, {Component} from 'react';
import {PageHeader, Panel} from 'react-bootstrap';

import tasks from '../../data/tasks.json';

class TaskPage extends Component {
    render() {
        const taskId = this.props.match.params.id;
        const task = tasks.find(((task) => task.id === parseInt(taskId, 10)));
        let bsStyle = 'default';

        if (task.status === 'complete') {
            bsStyle = 'success';
        } else if (task.status === 'overdue') {
            bsStyle = 'danger';
        }

        return (
            <div>
                <PageHeader>
                    {task.title}
                </PageHeader>
                <Panel bsStyle={bsStyle}>
                    <Panel.Heading>
                        <Panel.Title componentClass="h2">Task Details</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <p>
                            <em>Due {task.dueDate}</em>
                        </p>
                        <p>
                            {task.description}
                        </p>
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}

export default TaskPage;
