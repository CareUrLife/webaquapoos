import React, {Component} from 'react';
import {Navbar, Nav, NavItem, Link} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Auth from '../../APIs/Auth.js';
import ReactTestUtils from 'react-addons-test-utils';
import Garden from './research.garden.js';
import ResearchDashboard from './research.dashboard.js';
import ResearchHomeIndex from './research.home.index.js';
import Login from './research.login.js';

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
            }else if(ReactTestUtils.isElementOfType(this.props.children, Login)){
                children = React.cloneElement(this.props.children, {
                    redirect : this.props.redirect,
                    setUserInfo : this.props.setUserInfo 
                })
            }else{
                children = React.cloneElement(this.props.children, 
                        {   redirect : this.props.redirect});
            }

        }
                return (
            <div>
                <header className="cd-main-header">
                    <a href="#0" className="cd-logo"><img src="/Images/cd-logo.svg" alt="Logo"/></a>

                    <a href="#0" className="cd-nav-trigger">Menu<span></span></a>
                    <nav className="cd-nav">
                         
                            
                            {this.props.user.isUserAuthenticated ? (
                                <ul className="cd-top-nav">
                                     <li>
                                        <a href="#">Introduction</a>
                                    </li>
                                    
                                    <li>
                                            <LinkContainer to="/research/dashboard">
                                                <a>Your Garden</a>
                                             </LinkContainer>
                                    </li>

                                    <li className="has-children">
                                        <a><img src="/Images/Research/user-face.jpg"/>Account</a>
                                        <ul>
                                            <LinkContainer to="/research/user">
                                                <li>Your Account</li>
                                            </LinkContainer>
                                            <li onClick={this.logOut.bind(this)}>
                                                <a>Log out</a>
                                            </li>
                                        </ul>
                                    </li>
                                    
                                    <li onClick={this.logOut.bind(this)}>
                                        <a>Log out</a>
                                    </li>
                                </ul>
                            ):(
                            <ul className="cd-top-nav">
                                <li>
                                    <a href="#">Introduction</a>
                                </li>
                                <li>
                                    <LinkContainer to="/research/login"><a>Log in</a></LinkContainer>
                                </li>
                                                            
                                <li href="/research/signup">
                                    <LinkContainer to="/research/signup"><a>Signup</a></LinkContainer>
                                </li>

                            </ul>
                            
                            )
                            }
                    </nav>
                </header>
                <main className="cd-main-content">
                    {children}
                </main>
            </div>

        )
    }
}

export default ResearchHome;
