import React, {Component} , {PropTypes} from 'react';
import BedGrow from './research.bedGrow.js';

class UnitBedGrow extends Component {
    
    constructor(props) {
        super(props); 
    }

    render() {
        return(
            <div className="unit-container-bedgrow col-xs-12 col-sm-12 col-md-12 col-lg-12"> 
                <div className="unit-container-bedgrow-title" onClick={()=>this.props.onUnitBarClick(this.props.key)}>
                    {this.props.name}
                </div>
                <div className="unit-container-bedgrow-body">
                    {this.props.beds.map(function(bed, index) {
                        return (
                            <BedGrow key={bed.id} {...bed}/>        
                        );
                    })} 
                </div>
            </div>
        );
    }
}

export default UnitBedGrow;
