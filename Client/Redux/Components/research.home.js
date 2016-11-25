import React, {Component} from 'react';
import {Navbar, Nav, NavItem, Link} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Auth from '../../APIs/Auth.js';
import {render} from 'react-dom';

class ResearchHome extends Component {

    constructor(props) {
        super(props); 
        this.state={};
    }

    componentDidMount() {
        let newState = {};
        newState.isUserAuthenticated = (localStorage.getItem('token') !== null);
        this.setState(newState);
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
                        
                        {this.state.isUserAuthenticated ? (
                            <Nav pullRight>
                                <LinkContainer to={{pathname: "/research/garden"}}>
                                    <NavItem eventKey={2}>Your Garden</NavItem>
                                </LinkContainer>
                                
                                <LinkContainer to="/research/logout">
                                    <NavItem eventKey={3}>Log out</NavItem>
                                </LinkContainer>
                            </Nav>
                        ):(
                            <Nav pullRight>
                                <LinkContainer to="/research/login">
                                    <NavItem eventKey={4}>Log in</NavItem>
                                </LinkContainer>
                                                            
                                <LinkContainer to="/research/signup">
                                    <NavItem eventKey={5}>Signup</NavItem>
                                </LinkContainer>
                            </Nav>
                        )
                        }
                    </Navbar.Collapse>
                </Navbar>
            </div>

        )
    }
}

export default ResearchHome;
