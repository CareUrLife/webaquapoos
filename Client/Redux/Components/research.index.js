import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import {LinkContainer} from 'react-router-bootstrap';
import Auth from '../../APIs/Auth.js';
import ReactTestUtils from 'react-addons-test-utils';
import Garden from './research.dashboard.garden.js';
import ResearchDashboard from './research.dashboard.js';
import ResearchHome from './research.home.js';
import Login from './research.login.js';
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, blue500, pinkA200,cyan500,teal500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import mainTheme from '../../Assets/UIThemes/mainTheme';

class ResearchIndex extends Component {

    constructor(props) {
        super(props); 
        this.state={};
        this.handleTouchTap = this.handleTouchTap.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.logOut = this.logOut.bind(this);
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
                    _this.props.setInitialState({units : [], numUnit : 0, user : {isUserAuthenticated : true, info : {...this.response.researcherData}},
                                                    appData : this.response.appData
                                                });
                    console.log(this.response);
                    _this.props.setIsUserAuthenticated(true);
                }else{
                    _this.props.setIsUserAuthenticated(false);
                    Auth.deauthenticateUser();
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
        this.props.redirect("/research/");
    }

    handleTouchTap(event, id) {
        if(id == 1) {
            this.props.redirect("/research/dashboard");
        }else if(id == 2) {
            event.preventDefault();
            let newState = Object.assign({}, this.state, {open: true, anchorEl: event.currentTarget});
            this.setState(newState);
        }else if(id == 3) {
            this.props.redirect("/research/login");
        }else if(id == 4) {
            this.props.redirect("/research/signup");
        }
    }
     
    handleRequestClose() {
        let newState = Object.assign({}, this.state, {open: false});
        this.setState(newState);
    }
    
    render() {
        let children;
        if(this.props.children !== null && this.props.children !== undefined) {
            if(ReactTestUtils.isElementOfType(this.props.children, ResearchDashboard)) {
                children = React.cloneElement(this.props.children, 
                        {   units : this.props.units, 
                            numUnit : this.props.numUnit, 
                            user : this.props.user,
                            appData : this.props.appData,
                            onUnitBarClick : this.props.onUnitBarClick,
                            onBtnAddVegetClick : this.props.onBtnAddVegetClick,
                            onBtnDelVegetClick : this.props.onBtnDelVegetClick,
                            onButtonAddClick : this.props.onButtonAddClick,
                            onCheckVisibilityClick : this.props.onCheckVisibilityClick,
                            redirect : this.props.redirect
                        }); 
            }else if(ReactTestUtils.isElementOfType(this.props.children, ResearchHome)) {
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


        const styles = {
            title : {
                cursor : 'pointer',
                fontSize : "20px",
                color : "green"
            },
            userIcon : {
                height : '36px',
                width : '36px',
                borderRadius : '50%',
                display: 'block'
            },
            user : {
                height : '50px',
                width : '50px',
                padding : '7px'
            },
            mediumIcon: {
                width: 50,
                height: 50,
            },
            medium: {
                width: 68,
                height: 68,
                padding: 9,
            },
            navbar : {
                paddingRight : "200px",
                paddingLeft : "200px",
                backgroundColor : "white"
            },

            barIconStyleLeft :{
                color : 'green'
            }
        }

        const appBarRightChildren = (isUserAuthenticated) => {
            if(isUserAuthenticated) {
                return (
                    <div style={{paddingTop : '7px'}}>
                        
                        <FlatButton label="Your Garden" primary={true} style={{bottom : "12px"}} onTouchTap={(event)=>{this.handleTouchTap(event, 1)}}/>
                        
                        <IconButton 
                            onTouchTap={(event)=>{this.handleTouchTap(event, 2)}}
                            label="Your Account"
                            children={<Avatar src="/Images/Research/user-face.jpg"/>}
                            iconStyle={styles.userIcon}
                            style={styles.user}
                            tooltip={
                                <div >
                                    <p>Aqua-Res Account : {this.props.user.info.usrName}</p>
                                    <p>({this.props.user.info.realName})</p>
                                </div>
                                }
                        />
                        <Popover
                            open={this.state.open}
                            anchorEl={this.state.anchorEl}
                            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            onRequestClose={this.handleRequestClose}
                            animation={PopoverAnimationVertical}>
                            <Menu>
                                <MenuItem primaryText="Account" />
                                <MenuItem primaryText="Log Out" onTouchTap={this.logOut}/>
                            </Menu>
                        </Popover> 
                        
                    </div>
                )
            }else{
                return (
                    <div style={{paddingTop : "15px"}}>
                        <FlatButton primary={true} label="Log In" onTouchTap={(event)=>{this.handleTouchTap(event, 3)}}/>
                        <RaisedButton secondary={true} label="Sign Up" onTouchTap={(event)=>{this.handleTouchTap(event, 4)}}/>
                    </div>
                )
                
            }
        };

        const muiTheme = getMuiTheme(mainTheme);

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={{minHeight : '100%'}}>
                <AppBar
                    title={<span style={styles.title}>AQUA-RES</span>}
                    iconElementLeft={<IconButton style={{paddingTop : "14px"}}><FontIcon className="material-icons" color={teal500}>dehaze</FontIcon></IconButton>}
                    iconStyleLeft={styles.barIconStyleLeft}
                    style={styles.navbar}>
                    {appBarRightChildren(this.props.user.isUserAuthenticated)}
                </AppBar>
                <div style={{minHeight : '100%'}}>
                    {children}
                </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default ResearchIndex;
