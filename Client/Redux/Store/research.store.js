import {createStore, applyMiddleware} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';
import researchReducers from '../Reducers/research.reducers.js';
const middleware = routerMiddleware(browserHistory);
var store = createStore(researchReducers, applyMiddleware(middleware));
export default store ;


