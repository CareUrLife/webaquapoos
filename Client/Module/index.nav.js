import React, {Component} from 'react';


class Nav extends Component {

    constructor(props) {
        super(props);
    } 

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">AquapoOS</a>
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-content">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                            {this.props.items.map(function(item, i) {
                                return (
                                    <li key={item.key}><a href={item.link}>{item.name}</a></li>
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
