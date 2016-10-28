import React, {Component} from 'react';
var ResizeStore = require('../Flux/Stores/resize.store.js');
import Update from 'react-addons-update';

function getWindowSize() {
    return ResizeStore.getWindowSize();
}

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {windowSize : getWindowSize(), subMenuVisible : false};
        this._onChange = this._onChange.bind(this);
    } 

    componentWillMount() {
        
    }

    updatePadding() {
        setTimeout(function () {
            window.requestAnimationFrame(function() {
                var paddingW = $('div.row.mNav-root').width() - $('div.mNav-branch').outerWidth() - $('div.mNav-cart').outerWidth() - $('div.mNav-about').outerWidth();
                $('div#padding').outerWidth(paddingW); 
                console.log("nav padding " + paddingW);

            })
        }, 0)
    }

    componentDidUpdate() {
        this.updatePadding();
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

        var submenu;

        if(this.state.windowSize.width < 768 && this.state.subMenuVisible) {
            submenu = <NavMenu items={this.props.aboutItems}/>
        }else{
            submenu = <div></div>
        }

        var navAboutItem;

        if(this.state.windowSize.width < 768) {
            navAboutItem = [{reflink:'#', text: 'Menu', key: 'menu', className: "nav-normal items", onClick : () => {var newState = Update(this.state, {$set : {subMenuVisible : !this.state.subMenuVisible}}); this.setState(newState); }}] 
        }else {
            navAboutItem = this.props.aboutItems;
        }
        return (
            <div className="mNav">
                <div className="container-fluid">
                    <div className="mNav-root row">
                        <div className="mNav-branch items ">
                            <a className="navbar-brach">AquapoOS</a> 
                        </div>
                        <NavAbout className="mNav-about row" 
                            items={navAboutItem}/>
                        <div id="padding">
                        </div>
                        <div className="mNav-cart  row">
                            <NavItem className="nav-special  items" text="Đặt hàng" reflink="#"/>
                            <NavCart/>
                        </div>
                    </div>
                    {submenu}
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
            <div className={this.props.className} onClick={this.props.onClick} style={this.props.style}>
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
            <div className="icon ">
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

class NavMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var style = {
            height : "40px"
        };

        var navStyle = {
            borderRight : "0px",
            paddingTop : "9px"
        };
        return (
            <div className="row" style={style}>
                {this.props.items.map(function(item, i) {
                    return (
                        <NavItem className={item.className} onClick={item.onClick} key={item.key} reflink={item.reflink} text={item.text} style={navStyle}/>
                    );
                })}
            </div>
        )
    }
}


export default Nav;
