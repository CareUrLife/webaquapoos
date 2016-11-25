import {render} from 'react-dom';
import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router';
import Index from './index.home.js';
import Login from './Redux/Components/research.login.js';
import Signup from './Redux/Components/research.signup.js'
import ResearchHome from './Redux/Components/research.home.js';
import ResearchDashboard from './Redux/Components/research.dashboard.js';
import {Provider} from 'react-redux';
var researchStore = require('./Redux/Store/research.store.js').store;
render((
    <Provider store={researchStore}>
    <Router history={browserHistory}>
        <Route path="/" component={Index}>
            <Route path="research" component={ResearchHome}>
                <Route path="login" component={Login}/>
                <Route path="signup" component={Signup}/>
                <Route path="dashboard" component={ResearchDashboard}/>
            </Route>
            <Route path="*" component={NoMatch}/>
        </Route>
    </Router>
    </Provider>
), document.getElementById('root'));

const NoMatch = (
    <div>
        <h3>This link do not match any content</h3>
    </div>
)
