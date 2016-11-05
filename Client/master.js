import {render} from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
import Index from './index.js';
import Research from './research.js';

render((
    <Router history={browserHistory}>
        <Route path="/" component={Index}>
            <Route path="research" component={Research}/>
            <Route path="*" component={NoMatch}/>
        </Route>
    </Router>
), document.getElementById('root'));
