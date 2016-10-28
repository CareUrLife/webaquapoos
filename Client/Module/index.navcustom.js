import React, {Component} from 'react';
var ResizeStore = require('../Flux/Stores/resize.store.js');
import Update from 'react-addons-update';

function getWindowSize() {
    return ResizeStore.getWindowSize();
}

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {windowSize : getWindowSize()};
        this._onChange = this._onChange.bind(this);
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
        console.log(newState.windowSize);
    }

    render() {
        
        return (
            <div className="mNav">
                <div className="container-fluid">
                    <div className="mNav-root row">
                        <div className="mNav-branch col-md-1 col-lg-1 col-sm-2 col-xs-3 items ">
                            <a className="navbar-brach">AquapoOS</a> 
                        </div>
                        <NavAbout className="mNav-about col-md-9 col-lg-9 col-sm-7 col-xs-6 row" items={this.props.aboutItems}/>
                        <div className="mNav-cart col-md-2 col-sm-3 col-lg-2 col-xs-3 row">
                            <NavItem className="nav-special col-md-6 col-lg-6 col-sm-6 col-xs-7 items" text="Đặt hàng" reflink="#"/>
                            <NavCart/>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

class NavItem extends Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return (
            <div className={this.props.className} onClick={this.props.onClick}>
                <a href={this.props.reflink}>{this.props.text}</a>
            </div> 
        );
    }
}

class NavCart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="icon col-md-6 col-lg-6 col-sm-6 col-xs-5">
                <a className="text-center">
                    <span className="fa-stack fa-lg">
                        <i className="fa fa-shopping-basket fa-2x " aria-hidden="true" style={{color: "#fff"}}></i>
                        <i className="fa fa-shopping-basket fa-1x " aria-hidden="true" style={{color: "#fff"}}></i>
                    </span>
                </a>
            </div>
        );
        
    }
}


class NavAbout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.className}>
                {this.props.items.map(function (item, i) {
                    return (
                        <NavItem className={item.className} onClick={item.onClick} key={item.key} reflink={item.reflink} text={item.text}/>
                    );
                })}
            </div> 
        );
         
    }
}


export default Nav;
