import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './Redux/Components/appRoutes.js';
import store from './Redux/Store/research.store.js';
import {Provider} from 'react-redux';


window.onload = ()=> {
    ReactDOM.render(<Provider store={store}><AppRoutes/></Provider>, document.getElementById('root'));
    module.hot.accept();
};



