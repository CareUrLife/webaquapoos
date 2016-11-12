import React, {Component , PropTypes} from 'react';
import Veget from './research.veget.js';
import Update from 'react-addons-update';
import {connect} from 'react-redux';



class BedGrow extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidUpdate() {
        console.log(this.props);
    }
    render() {
        return (
            <div className="bed-grow-section col-xs-12 col-sm-6 col-lg-3 col-md-3">
                <div className="bed-grow-section-title" onClick={()=>this.props.onBedBarClick(this.props.pos)}>
                    {this.props.name}
                </div>
                <div className="bed-grow-section-body">
                    <AddVeget pos={this.props.pos} onBtnAddVegetClick={this.props.onBtnAddVegetClick}/>
                    {this.props.vegets.map(function(veget, index) {
                        return (
                            <Veget key={veget.pos.veget} {...veget} onClick={() => this.props.onBtnDelVegetClick(veget.pos)}/>
                        );
                    })} 
                </div>
                <div className="bed-grow-section-status row">
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
            <div className=" bed-grow-section-status col-md-4 col-lg-4 col-sm-4 col-xs-4">
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
                    this.props.onBtnAddVegetClick(this.props.pos, this.state.value);
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




export default BedGrow;
