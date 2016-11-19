import React, {Component} from 'react';
import {render} from 'react-dom';
import Update from 'react-addons-update';
import {createStore} from 'redux';
import ContainerGarden from './Redux/Components/Containers/research.container.garden.js';
import DetailStatus from './Redux/Components/research.detailStatus.js'
import ResearchReducers from './Redux/Reducers/research.reducers.js';
import {Provider} from 'react-redux';
var researchStore = require('./Store/research.store.js').store;

class ResearchDashboard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <ContainerGarden/>
            </div>
        ); 
    }
}

export default ResearchDashboard;



