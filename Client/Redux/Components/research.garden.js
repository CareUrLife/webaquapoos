import React, {Component, PropTypes} from 'react';
import Update from 'react-addons-update';
import UnitBedGrow from './research.unitBedGrow.js';


class Garden extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            inputs : {}
        }
    }

    handleInput(event, formId, inputName) {
        var newState = Object.assign({}, this.state);
        if(typeof(newState.inputs[formId]) === 'undefined') {
            newState.inputs[formId] = {};
        }
        newState.inputs[formId][inputName] = event.target.value;
        this.setState(newState);
    }

    render() {
        return (
            <div className="garden-section">
                <div className="garden-section-header">
                    <div className="garden-section-header-intro">
                        <h3><strong>{this.props.name}</strong></h3>
                    </div>
                </div>
                <div className="garden-section-body">
                    <button type="button" className="btn-add btn btn-default" data-toggle="modal" data-target="#inputUnitInfo" >Add Unit</button>
                    {this.props.units.map((unit, index) => 
                        
                            <UnitBedGrow 
                            key={unit.pos.unit} 
                            {...unit} 
                            onUnitBarClick={this.props.onUnitBarClick}
                            onBtnAddVegetClick={this.props.onBtnAddVegetClick}
                            onBtnDelVegetClick={this.props.onBtnDelVegetClick}

                            />
                    )}
                    
                    <div id="inputUnitInfo" className="modal fade" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title">Unit Bed Grow Input</h4>
                                </div>
                                <div className="modal-body">
                                    <label htmlFor="unitName">Unit Name : </label>
                                    <input type="text" id="unitName" onChange={(event)=>this.handleInput(event,"infoUnit", "name")}/>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-lg-3 col-md-3">
                                            <label htmlFor="ph">PH : </label>    
                                            <input type="text" id="ph" onChange={(event)=>this.handleInput(event,"infoUnit", "ph")}/>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-lg-3 col-md-3">
                                            <label htmlFor="temp" >Temp : </label>    
                                            <input type="text" id="temp" onChange={(event)=>this.handleInput(event,"infoUnit", "temp")}/>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-lg-3 col-md-3">
                                             <label htmlFor="ph">N03 : </label>    
                                            <input type="text" id="nitrat" onChange={(event)=>this.handleInput(event,"infoUnit", "nitrat")}/>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-default" onClick={()=>this.props.onButtonAddClick(this.state.inputs["infoUnit"]["name"], this.state.inputs["infoUnit"]["temp"], this.state.inputs["infoUnit"]["ph"], this.state.inputs["infoUnit"]["nitrat"])}>OK</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Garden;







