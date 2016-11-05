import React, {Component} from 'react';
import Update from 'react-addons-update';
import ContainerBedGrow from './Redux/Components/research.growBedContainer.js';
import DetailStatus from './Redux/Components/research.detailStatus.js'

class Research extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <ContainerBedGrow/>
                <DetailStatus/>
            </div>
        ); 
    }
}

export default Research;
