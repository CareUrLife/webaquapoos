import React, {Component} from 'react';
import ContainerGarden from './Containers/research.container.garden.js';
import DetailStatus from './research.detailStatus.js'

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



