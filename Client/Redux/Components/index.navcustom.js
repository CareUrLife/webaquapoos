import React, {Component} from 'react';
import Update from 'react-addons-update';


class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {subMenuVisible : false};
    } 

    componentDidMount() {
    }

    componentWillUnmount() {
    }


    render() {

        var submenu;

        if(this.props.windowSize.width < 768 && this.state.subMenuVisible) {
            submenu = <NavMenu items={this.props.aboutItems}/>
        }else{
            submenu = <div></div>
        }

        var navAboutItem;

        if(this.props.windowSize.width < 768) {
            navAboutItem = [{reflink:'#', text: 'Menu', key: 'menu', className: "nav-normal items", onClick : () => {var newState = Update(this.state, {$set : {subMenuVisible : !this.state.subMenuVisible}}); this.setState(newState); }}] 
        }else {
            navAboutItem = this.props.aboutItems;
        }
        return (
            <div className="mNav">
                <div className="container-fluid">
                    <div className="mNav-root ">
                        <div>
                                <a className="navbar-brach mNav-branch items " style={{float:"left"}}>AquapoOS</a> 
                            <ul>
                                
                            </ul>
                        </div>
                        
                        <div style={{float : "right"}}>
                            <ul>
                                <NavCart style={{float: "right"}}/>
                                <NavItem className="nav-special  items" text="Đặt hàng" reflink="#" style={{float : "right"}}/>
                                
                                {navAboutItem.map(function (item, i) {
                                    return (
                                        <NavItem className={item.className} onClick={item.onClick} key={item.key}       reflink={item.reflink} text={item.text} style={{float:"left"}}/>
                                    );
                                })}
                            </ul>
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
            <li className={this.props.className} onClick={this.props.onClick} style={this.props.style}>
                <a href={this.props.reflink}>{this.props.text}</a>
            </li> 
        );
    }
}

class NavCart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="icon" style={this.props.style}>
                <a className="text-center">
                    <span className="fa-stack fa-lg">
                        <i className="fa fa-shopping-basket fa-2x " aria-hidden="true" style={{color: "#fff"}}></i>
                        <i className="fa fa-shopping-basket fa-1x " aria-hidden="true" style={{color: "#fff"}}></i>
                    </span>
                </a>
            </li>
        );
        
    }
}



class NavMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var style = {
            height : "40px",
            width : "inherit",
            backgroundColor : "white ",
            opacity : "0.7"
        };

        var navStyle = {
            borderRight : "0px",
            paddingTop : "9px",
            float: "left",
            color : "black"
        };

        var ulStyle = {
            listStyleType: "none",
            margin: "0",
            padding: "0 0 0 0"
        }
        return (
            <div  style={style}>
                {this.props.items.map(function(item, i) {
                    return (
                        <ul style={ulStyle} >
                            <NavItem className={item.className} onClick={item.onClick} key={item.key} reflink={item.reflink} text={item.text} style={navStyle}/>
                        </ul>
                    );
                })}
            </div>
        )
    }
}


export default Nav;
