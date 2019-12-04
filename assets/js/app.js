import React from 'react';
import { HomePage} from './pages'
import {ProfilePage} from './pages'
import {EmployeesPage} from './pages';
import {ProjectsPage} from './pages';
import {TeamsPage} from './pages';
import {CreateTeamPage} from './pages';
import {CreateProjectPage} from './pages';
import '../css/app.css';
import { Route, Switch } from 'react-router-dom';

const App = () => {

    return (
        <>
            <Switch >
                <Route exact path="/" component={HomePage} />
                <Route exact path="/profile" component={ProfilePage} />
                <Route exact path="/employees" component={EmployeesPage} />
                <Route exact path="/projects" component={ProjectsPage} />
                <Route exact path="/teams" component={TeamsPage} />
                <Route exact path="/create-team" component={CreateTeamPage} />
                <Route exact path="/create-project" component={CreateProjectPage} />
            </Switch >
        </>
    );
}

export default App;