import {render} from 'react-dom';
import React from 'react';
import { Route, Link, browserHistory, IndexRoute} from 'react-router';
import Index from './index.home.js';
import Login from './Redux/Components/research.login.js';
import Signup from './Redux/Components/research.signup.js';
import ResearchHome from './Redux/Components/research.home.js';
import ResearchDashboard from './Redux/Components/research.dashboard.js';
import {Provider} from 'react-redux';

const routes = (
    <Route path="/">
        <IndexRoute component={Index}/>
        <Route path="research">
            <IndexRoute component={ResearchHome}/>
            <Route path="login" component={Login}/>
            <Route path="signup" component={Signup}/>
            <Route path="dashboard" component={ResearchDashboard}/>
        </Route>
    </Route>
);

export default routes;
