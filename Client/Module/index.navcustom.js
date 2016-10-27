import React, {Component} from 'react';
var ResizeStore = require('../Flux/Stores/resize.store.js');
import Update from 'react-addons-update';

function getWindowSize {
    return ResizeStore.getWindowSize();
}

class Nav extends Component {

    constructor(props) {
        super(props);
    } 

    getInitialState() {
        return {
            windowSize : getWindowSize();
        }
    }

    componentDidMount() {
        ResizeStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        ResizeStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        var newState = Update(this.state, {$set : {windowSize : getWindowSize()}}); 
        this.setState(newState);
    }

    render() {
        return (
            <div className="mNav">
                <div className="container-fluid">
                    <div className="mNav-root row">
                        <div className="mNav-branch col-md-1 col-lg-1 col-sm-2 col-xs-3 items ">
                            <a className="navbar-brach">AquapoOS</a> 
                        </div>
                        <div className="mNav-about col-md-9 col-lg-9 col-sm-7 col-xs-5 row">
                                {this.props.items.map(function(item, i) {
                                    return (
                                        <div key={item.key} className={item.className}><a href={item.link}>{item.name}</a></div>
                                    ); 
                                })}
                        </div>
                        <div id="padding">
                        </div>
                        <div className="mNav-cart col-md-2 col-sm-3 col-lg-2 col-xs-4 row">
                            <div className="nav-special col-md-6 col-lg-6 col-sm-6 items"><a>Đặt hàng</a></div>
                            <div className="icon col-md-6 col-lg-6 col-sm-6">
                                <a className="text-center">
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-shopping-basket fa-2x " aria-hidden="true" style={{color: "#fff"}}></i>
                                        <i className="fa fa-shopping-basket fa-1x " aria-hidden="true" style={{color: "#fff"}}></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default Nav;
