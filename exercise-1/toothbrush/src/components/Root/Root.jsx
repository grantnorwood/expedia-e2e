import React, {Component} from 'react';
import {Route} from "react-router-dom";
import PageNavbar from '../PageNavbar/PageNavbar';
import HomePage from '../HomePage/HomePage';
import TripsPage from '../TripsPage/TripsPage';
import TasksPage from '../TasksPage/TasksPage';
import ProfilePage from '../ProfilePage/ProfilePage';

class Root extends Component {
    render() {
        return (
            <div>
                <PageNavbar />
                <div className="container" role="main">
                    <Route path="/" exact component={HomePage} />
                    <Route path="/trips" exact component={TripsPage} />
                    <Route path="/tasks" exact component={TasksPage} />
                    <Route path="/profile" exact component={ProfilePage} />
                </div>
            </div>
        );
    }
}

export default Root;
