import React from 'react';
import {Provider} from 'react-redux';
import {Route, Router, browserHistory} from 'react-router';
import routes from '../../routes.js';
import store from '../Store/research.store.js';
import NotFoundPage from './NotFoundPage.js';
export default class AppRoutes extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory} routes={routes} onUpdate={()=>window.scrollTo(0,0)}/>

            </Provider>
        );
    }
}
