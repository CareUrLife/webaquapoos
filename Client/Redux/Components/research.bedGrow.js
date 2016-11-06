import React, {Component} , {PropTypes} from 'react';
import Veget from './research.veget.js';
import Update from 'react-addons-update';


class BedGrow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        <div className="bed-grow col-xs-12 col-sm-12 col-lg-3 col-md-3">
            <div className="bed-grow-title" onClick={()=>this.props.onBedBarClick(this.props.key)}>
                {this.props.name}
            </div>
            <div className="bed-grow-body">
                {this.props.vegets.map(function(veget, index) {
                    return (
                        <Veget key={veget.id} {...veget} onClick={() => this.props.onVegetClick(veget.id)}/>
                    );
                })} 
            </div>
            <div className="bed-grow-status">
                {this.props.items.map(function(item,index) {
                    return(
                        <StatusItems/>
                    )
                })}
            </div>
        </div>
    }
}


class StatusItems extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="bed-grow-status-item">
            </div> 
        );
        
    }
    
}
