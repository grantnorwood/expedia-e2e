import React, {Component} from 'react';
import {PageHeader, Button, Well} from 'react-bootstrap';
import TasksList from '../TasksList/TasksList';
import {LinkContainer} from 'react-router-bootstrap';

import tasks from '../../data/tasks.json';

class TasksPage extends Component {
    render() {
        return (
            <div>
                <PageHeader>
                    My Tasks
                </PageHeader>
                <Well bsSize="small">
                    <LinkContainer to="/tasks/new"><Button bsStyle="primary">Create a new task</Button></LinkContainer>
                </Well>
                <TasksList tasks={tasks} />
            </div>
        );
    }
}

export default TasksPage;
