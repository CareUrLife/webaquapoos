import {render} from 'react-dom';
import React from 'react';
import { Route, Link, browserHistory, IndexRoute} from 'react-router';
import Index from './Redux/Components/index.home.js';
import Login from './Redux/Components/research.login.js';
import Signup from './Redux/Components/research.signup.js';
import ContainerResearch from './Redux/Components/Containers/research.container.index.js';
import ResearchDashboard from './Redux/Components/research.dashboard.js';
import ResearchHome from './Redux/Components/research.home.js';
import User from './Redux/Components/research.userinfo.js';
import {Provider} from 'react-redux';
import store from './Redux/Store/research.store.js';

const requireLogin =  (nextState, replace, cb) => {
    const  {user : {isUserAuthenticated}} = store.getState();
    if(!isUserAuthenticated) {
        replace('/research/login');
    }
    cb();
}

const routes = (
    <Route path="/">
        <IndexRoute component={Index}/>
        <Route path="research" component={ContainerResearch}>
            <IndexRoute component={ResearchHome}/>
            <Route path="login" component={Login}/>
            <Route path="signup" component={Signup}/>
            <Route path="dashboard" component={ResearchDashboard} onEnter={requireLogin}/>
            <Route path="user" component={User}/>
        </Route>
    </Route>
);

module.exports = routes;
