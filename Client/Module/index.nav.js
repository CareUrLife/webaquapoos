import React, {Component} from 'react';


class Nav extends Component {

    constructor(props) {
        super(props);
    } 

    render() {
        return (
                <nav className="navbar navbar-default navbar-custom">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle hidden-lg-up" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="sr-only">Toggle Navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">AquapoOS</a>
                        </div>
                        <div className="collapse navbar-collapse " id="navbar-content">
                            <ul className="nav navbar-nav nav-custom navbar-right">
                                <li className="active"><a href="#">Home</a></li>
                                {this.props.items.map(function(item, i) {
                                    return (
                                        <li key={item.key} className={item.className}><a href={item.link}>{item.name}</a></li>
                                    ); 
                                })}
                                <li><a className="fa fa-shopping-basket fa-stack-2x " aria-hidden="true" style={{color: "#006B3C"}}></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
        );
    }
}

export default Nav;
