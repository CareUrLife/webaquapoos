import React, {Component} from 'react';


class Nav extends Component {

    constructor(props) {
        super(props);
    } 

    render() {
        return (
                <nav className="navbar navbar-default navbar-custom">
                    <div className="container-fluid">

                        <div className="navbar-header pull-left">
                            
                            <a className="navbar-brand" href="#">AquapoOS</a>
                            <button type="button" className="navbar-toggle hidden-lg-up" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="sr-only">Toggle Navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>

                        <div className="navbar-header pull-right">
                            <ul className="nav navbar-nav nav-custom pull-left">
                                <li className="nav-special pull-left"><a>Order</a></li>
                                
                                <li className="icon pull-right">
                                    <a className="text-center">
                                        <span className="fa-stack fa-lg">
                                            <i className="fa fa-shopping-basket fa-lg " aria-hidden="true" style={{color: "#fff"}}></i>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            

                        </div>
                        
                        <div className="collapse navbar-collapse navbar-left" id="navbar-content">
                            <ul className="nav navbar-nav nav-custom ">
                                <li className="active"><a href="#">Home</a></li>
                                {this.props.items.map(function(item, i) {
                                    return (
                                        <li key={item.key} className={item.className}><a href={item.link}>{item.name}</a></li>
                                    ); 
                                })}
                            </ul>
                        </div>
                    </div>
                </nav>
        );
    }
}

export default Nav;
