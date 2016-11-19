import React, {Component} from 'react';
import {Navbar, Nav, NavItem, Link} from 'react-bootstrap';
var Auth = require('../../APIs/Auth.js');
import {render} from 'react-dom';

class ResearchHome extends Component {

    constructor(props) {
        super(props); 
        this.state={};
    }

    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">AquapoOS Researcher</a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">Introduction</NavItem>
                        </Nav>
                        <Nav pullRight>
                            {Auth.isUserAuthenticated() ? (
                                <NavItem eventKey={2}><Link to="/garden">Your Garden</Link></NavItem>
                                <NavItem eventKey={3}><Link to="/logout">Log out</Link></NavItem>
                            ):(
                                <NavItem eventKey={4}><Link to="/login">Log in</Link></NavItem>
                                <NavItem eventKey={5}>
                                    <Link to="/logout">Logout</Link>
                                </NavItem>
                            )
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        )
    }
}

export default ResearchHome;
