import React, {Component} from 'react';
import Update from 'react-addons-update';


class ContainerBedGrow extends Component {
    
    constructor(props) {
        super(props);
    }


    render() {
        
    }
}

class UnitContainerBedGrow extends Component {
    
    constructor(props) {
        super(props); 
    }

    render() {
        return(
            <div className="unit-container-bed-grow col-xs-12 col-sm-12 col-md-12 col-lg-12"> 
                <div className="unit-container-bed-grow-title">
                    {this.props.name}
                </div>
                <div className="unit-container-bed-grow-body">
                    {this.props.items.map(function(item, index) {
                        return (
                            <BedGrow name={item.name}/>        
                        );
                    })} 
                </div>
            </div>
        );
    }
}

class BedGrow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        <div className="bed-grow col-xs-12 col-sm-12 col-lg-3 col-md-3">
            <div className="bed-grow-title">
                {this.props.name}
            </div>
            <div className="bed-grow-body">
                {this.props.items.map(function(item, index) {
                    return (
                        <Veget name={item.name} status={item.status} items={item.items}/>
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

class Veget extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>{this.props.nameVeget}</p>
            </div>
        );
    }
}
