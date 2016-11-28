import React, {Component} from 'react';
import {Navbar, Nav, NavItem, Link} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Auth from '../../APIs/Auth.js';
import ReactTestUtils from 'react-addons-test-utils';
import Garden from './research.garden.js';
import ResearchDashboard from './research.dashboard.js';
import ResearchHomeIndex from './research.home.index.js';

class ResearchHome extends Component {

    constructor(props) {
        super(props); 
        this.state={};
    }

    componentDidMount() {
        if(Auth.isUserAuthenticated()) {
            
            let xhr = new XMLHttpRequest();
            let _this = this;
            xhr.open('post', '/research/auth');
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.setRequestHeader('Authorization', 'bearer ' + Auth.getToken());
            xhr.responseType = 'json';

            xhr.onload = function() {
                if(this.status === 200) {
                    _this.props.setIsUserAuthenticated(true); 
                }else{
                    _this.props.setIsUserAuthenticated(false);
                }
            }

            xhr.send();
        }else{
            this.props.setIsUserAuthenticated(false);
        }
    } 

    logOut() {
        Auth.deauthenticateUser();
        this.props.setIsUserAuthenticated(false);
    }
    
    render() {
        let children;
        if(this.props.children !== null && this.props.children !== undefined) {
            if(ReactTestUtils.isElementOfType(this.props.children, ResearchDashboard)) {
                children = React.cloneElement(this.props.children, 
                        {   units : this.props.units, 
                            numUnit : this.props.numUnit, 
                            user : this.props.user,
                            onUnitBarClick : this.props.onUnitBarClick,
                            onBtnAddVegetClick : this.props.onBtnAddVegetClick,
                            onBtnDelVegetClick : this.props.onBtnDelVegetClick,
                            onButtonAddClick : this.props.onButtonAddClick,
                            onCheckVisibilityClick : this.props.onCheckVisibilityClick
                        }); 
            }else if(ReactTestUtils.isElementOfType(this.props.children, ResearchHomeIndex)) {
                children = React.cloneElement(this.props.children , 
                        {   setIsUserAuthenticated : this.props.setIsUserAuthenticated,
                            user : this.props.user
                        });
            }else{
                children = React.cloneElement(this.props.children, 
                        {   redirect : this.props.redirect});
            }

        }
                return (
            <div>
                <Navbar inverse collapseOnSelect id="top-nav" fixedTop={true}>
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
                        
                        {this.props.user.isUserAuthenticated ? (
                            <Nav pullRight>
                                <LinkContainer to={{pathname: "/research/dashboard"}}>
                                    <NavItem eventKey={2}>Your Garden</NavItem>
                                </LinkContainer>
                                
                                
                                <NavItem eventKey={3} onClick={this.logOut.bind(this)}>Log out</NavItem>
                            
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
                <div className="research-content">
                    {children}
                </div>
            </div>

        )
    }
}

export default ResearchHome;
