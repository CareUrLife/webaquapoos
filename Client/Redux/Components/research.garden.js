import React, {Component, PropTypes} from 'react';
import Update from 'react-addons-update';
import UnitBedGrow from './research.unitBedGrow.js';


class Garden extends Component {
    
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <button type="button" className="btn btn-default" onClick={this.props.onButtonAddClick}>Add Unit</button>
                {this.props.units.map(function(unit, index) {
                    return (
                        <UnitBedGrow 
                        key={unit.pos.unit} 
                        {...unit} 
                        onUnitBarClick={this.props.onUnitBarClick}
                        />
                    )
                })}
            </div> 
        )
    }
}

export default Garden;







