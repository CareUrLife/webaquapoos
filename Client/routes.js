import {render} from 'react-dom';
import React from 'react';
import { Route, Link, browserHistory, IndexRoute} from 'react-router';
import Index from './index.home.js';
import Login from './Redux/Components/research.login.js';
import Signup from './Redux/Components/research.signup.js';
import ContainerResearch from './Redux/Components/Containers/research.container.home.js';
import ResearchDashboard from './Redux/Components/research.dashboard.js';
import ResearchHomeIndex from './Redux/Components/research.home.index.js';
import {Provider} from 'react-redux';

const routes = (
    <Route path="/">
        <IndexRoute component={Index}/>
        <Route path="research" component={ContainerResearch}>
            <IndexRoute component={ResearchHomeIndex}/>
            <Route path="login" component={Login}/>
            <Route path="signup" component={Signup}/>
            <Route path="dashboard" component={ResearchDashboard}/>
        </Route>
    </Route>
);

export default routes;
