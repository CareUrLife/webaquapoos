import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './Redux/Components/appRoutes.js';
import {Provider} from 'react-redux';

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

ReactDOM.render(<AppRoutes/>, document.getElementById('root'));

    




