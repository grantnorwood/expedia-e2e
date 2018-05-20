import React, {Component} from 'react';
import {Route} from "react-router-dom";
import PageNavbar from '../PageNavbar/PageNavbar';

import HomePage from '../HomePage/HomePage';

import TripsPage from '../TripsPage/TripsPage';
import TripPage from '../TripPage/TripPage';
import NewTripPage from '../NewTripPage/NewTripPage';

import TasksPage from '../TasksPage/TasksPage';
import TaskPage from '../TaskPage/TaskPage';
import NewTaskPage from '../NewTaskPage/NewTaskPage';

import ProfilePage from '../ProfilePage/ProfilePage';

import TravelAlertsPage from '../TravelAlertsPage/TravelAlertsPage';
import TravelAlertPage from '../TravelAlertPage/TravelAlertPage';

import Footer from '../Footer/Footer';

class Root extends Component {
    render() {
        return (
            <div>
                <PageNavbar />
                <div className="container" role="main">
                    <Route path="/" exact component={HomePage} />
                    <Route path="/trips" exact component={TripsPage} />
                    <Route path="/trips/:id(\d+)" component={TripPage} />
                    <Route path="/trips/new" exact component={NewTripPage} />
                    <Route path="/tasks" exact component={TasksPage} />
                    <Route path="/tasks/:id(\d+)" component={TaskPage} />
                    <Route path="/tasks/new" exact component={NewTaskPage} />
                    <Route path="/travel-alerts" exact component={TravelAlertsPage} />
                    <Route path="/travel-alerts/:id(\d+)" component={TravelAlertPage} />
                    <Route path="/profile" exact component={ProfilePage} />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Root;
