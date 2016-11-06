import React, {Component} , {PropTypes} from 'react';
import Update from 'react-addons-update';
import UnitBedGrow from './research.unitBedGrow.js';


class Garden extends Component {
    
    constructor(props) {
        super(props);
    }


    render() {
        <div>
            {this.props.units.map(function(unit, index) {
                return (
                    <UnitBedGrow 
                    key={unit.key} 
                    {...unit} 
                    />
                )
            })}
        </div> 
    }
}







