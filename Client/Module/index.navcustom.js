import React, {Component} from 'react';


class Nav extends Component {

    constructor(props) {
        super(props);
    } 

    render() {
        return (
            <div className="mNav">
                <div className="container-fluid">
                    <div className="mNav-root row">
                        <div className="mNav-branch col-md-1 items ">
                            <a className="navbar-brach">AquapoOS</a> 
                        </div>
                        <div className="mNav-about col-md-9 row">
                                {this.props.items.map(function(item, i) {
                                    return (
                                        <div key={item.key} className={item.className}><a href={item.link}>{item.name}</a></div>
                                    ); 
                                })}
                        </div>
                        <div id="padding">
                        </div>
                        <div className="mNav-cart col-md-2 row">
                            <div className="nav-special col-md-6 items"><a>Order</a></div>
                            <div className="icon col-md-6">
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
