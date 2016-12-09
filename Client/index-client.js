import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './Redux/Components/appRoutes.js';
import {Provider} from 'react-redux';


    ReactDOM.render(<AppRoutes/>, document.getElementById('root'));

    if (module.hot) {
        // Whenever a new version of App.js is available
        module.hot.accept('./Redux/Components/appRoutes.js', function () {
        // Require the new version and render it instead
            var NextApp = require('./Redux/Components/appRoutes.js');
            ReactDOM.render(<NextApp />, document.getElementById('root'));
        })
    }




