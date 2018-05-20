import React, {Component} from 'react';
import {Route} from "react-router-dom";
import PageNavbar from '../PageNavbar/PageNavbar';
import HomePage from '../HomePage/HomePage';
import TripsPage from '../TripsPage/TripsPage';
import TasksPage from '../TasksPage/TasksPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import TravelAlertsPage from '../TravelAlertsPage/TravelAlertsPage';
import Footer from '../Footer/Footer';
import NewTaskPage from '../NewTaskPage/NewTaskPage';
import NewTripPage from '../NewTripPage/NewTripPage';

class Root extends Component {
    render() {
        return (
            <div>
                <PageNavbar />
                <div className="container" role="main">
                    <Route path="/" exact component={HomePage} />
                    <Route path="/trips" exact component={TripsPage} />
                    <Route path="/trips/new" exact component={NewTripPage} />
                    <Route path="/tasks" exact component={TasksPage} />
                    <Route path="/tasks/new" exact component={NewTaskPage} />
                    <Route path="/travel-alerts" exact component={TravelAlertsPage} />
                    <Route path="/profile" exact component={ProfilePage} />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Root;
