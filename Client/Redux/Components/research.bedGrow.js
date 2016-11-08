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
        <div className="bed-grow col-xs-12 col-sm-12 col-lg-3 col-md-3">
            <div className="bed-grow-title" onClick={()=>this.props.onBedBarClick(this.props.pos)}>
                {this.props.name}
            </div>
            <div className="bed-grow-body">
                <ContainerAddVeget/>
                {this.props.vegets.map(function(veget, index) {
                    return (
                        <Veget key={veget.pos.veget} {...veget} onClick={() => this.props.onVegetClick(veget.pos)}/>
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
                    this.props.dispatch(addVegetGrowBed(this.state.value, this.props.pos));
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
 export default BedGrow;
