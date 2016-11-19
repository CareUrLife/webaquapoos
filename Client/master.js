import {render} from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
import Index from './index.js';
import ResearchDashboard from './research.dashboard.js';
import Login from './Components/research.login.js';
import ResearchHome from './Components/research.home.js';
import ResearchDashboard from './research.dashboard.js';
import {Provider} from 'react-redux';
import {createStore} from 'redux'; 
var researchStore = require('./Store/research.store.js').store;
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
