import React, {Component , PropTypes} from 'react';
import Veget from './research.veget.js';
import Update from 'react-addons-update';
import {addVegetGrowBed} from '../Actions/research.actions.js';
import {connect} from 'react-redux';



class BedGrow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bed-grow col-xs-12 col-sm-12 col-lg-3 col-md-3">
                <div className="bed-grow-title" onClick={()=>this.props.onBedBarClick(this.props.pos)}>
                    {this.props.name}
                </div>
                <div className="bed-grow-body">
                    <ContainerAddVeget pos={this.props.pos}/>
                    {this.props.vegets.map(function(veget, index) {
                        return (
                            <Veget key={veget.pos.veget} {...veget} onClick={() => this.props.onVegetClick(veget.pos)}/>
                        );
                    })} 
                </div>
                <div className="bed-grow-status row">
                    {Object.keys(this.props.status).map((key, index) => {
                        return (
                            <StatusItems key={key} name={key} value={this.props.status[key]}/>
                        );
                    })}
                </div>
            </div> 
        )
        
    }
}

class StatusItems extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-4 col-lg-4 col-sm-4 col-xs-4">
                <h3>{this.props.name}</h3>
                <h3>{this.props.value}</h3>
            </div>
        );
    }
}
class AddVeget extends Component {
    
    constructor (props) {
        super(props);
        this.state = {value : ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        var newState = Object.assign({}, this.state, {value : event.target.value})
        this.setState(newState);
    }

    render () {
        let input;

        return (
            <div>
                <form onSubmit = {e => {
                    e.preventDefault();
                    if (!this.state.value.trim()) {
                        return
                    }
                    this.props.dispatch(addVegetGrowBed(this.props.pos, this.props.value));
                    var newState = {value : ''};
                    this.setState(newState);
                }}>

                    <input value={this.state.value} onChange={this.handleChange}/>

                    <button type="submit">
                        Add
                    </button>
                </form>
            </div>    
        )
    }
}

var ContainerAddVeget = connect()(AddVeget);


export default BedGrow;
