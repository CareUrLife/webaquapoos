import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import { FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ReactDOM from 'react-dom';
import Auth from '../../APIs/Auth.js';
import FontIcon from 'material-ui/FontIcon';
var {Grid, Row, Col} = require('react-flexbox-grid');


const constant = {
    USERNAME_INPUT_HANDLE : 1,
    PASSWORD_INPUT_HANDLE : 2,
    REPASSWORD_INPUT_HANDLE : 3,
    REALNAME_INPUT_HANDLE : 4,
    EMAIL_INPUT_HANDLE : 5,
    DESCRIP_INPUT_HANDLE : 6
};
class ResearchSignup extends Component {
    
    constructor(props) {
        super(props);
        this.state={};
        this.handleEvent = this.handleEvent.bind(this);
    }

    componentDidMount() {
        if(Auth.isUserAuthenticated()){
            this.props.redirect('/research');
        }
    }

    formProcess(event) {
        event.preventDefault();
        let _this = this;
        let newUser = 'usrName=' + this.state.usrName +
            '&realName=' + this.state.realName+
            '&isAddmin=false' + 
            '&email=' + this.state.usrEmail +
            '&password=' + this.state.usrPwd + 
            '&description=' + this.state.usrDescription;
        let xhr =new XMLHttpRequest();
        xhr.open('post', '/research/signup');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.responseType = 'json';
        xhr.onload = function() {
            let state = {};

            if(this.status === 200) {
                state.errorMessage = '';
                state.errors = {};

                _this.setState(state);

                _this.props.redirect('/research/login');
            } else {
                state.errorMessage = this.response.message;
                state.errors = this.response.error ? this.response.errors : {};

                _this.setState(state);
            }
        };

        xhr.send(newUser);
    }
    
    
    handleEvent(event, id, type){
        if(id === constant.USERNAME_INPUT_HANDLE) {
            if(type === "onChange") {
                let state = Object.assign({}, this.state, {usrName : event.target.value})
                this.setState(state);
            }
        }else if(id === constant.PASSWORD_INPUT_HANDLE) {
            if(type === "onChange") {
                let state = Object.assign({}, this.state, {usrPwd : event.target.value});
                this.setState(state);
            }
        }else if(id === constant.REPASSWORD_INPUT_HANDLE) {
            if(type === "onChange") {
                let state = Object.assign({}, this.state, {reUsrPwd : event.target.value});
                this.setState(state);
            }
        }else if(id === constant.REALNAME_INPUT_HANDLE) {
            if(type === "onChange") {
                let state = Object.assign({}, this.state, {usrRealName : event.target.value});
                this.setState(state);
            }
        }else if(id === constant.EMAIL_INPUT_HANDLE) {
            if(type === "onChange") {
                let state = Object.assign({}, this.state, {usrEmail : event.target.value});
                this.setState(state);
            }
        }else if(id === constant.DESCRIP_INPUT_HANDLE) {
            if(type === "onChange") {
                let state = Object.assign({}, this.state, {usrDescription : event.target.value});
                this.setState(state);
            }
        }
    }

    render() {
        const styles = {
            signupForm : {
                mainForm : {
                    paddingTop : '30px',
                    marginBottom : '70px'
                },
                mainPaper : {
                    padding : '20px'
                },

                forgotPass : {
                    fontSize : '1.3rem',
                    cursor : 'point'
                },

                errorMessage : {
                    color : '#CA3B27',
                    textTransform : 'uppercase',
                    fontSize : '15px',
                    display : 'inline-block'
                },
                logo : {
                    fontSize: "60px",
                    color : '#009688',
                    paddingTop : '70px'
                },
                header : {
                    color : '#00796B'
                },
                secondaryHeader : {
                    color : '#616161'
                },
                headerPaper : {
                    height : '80px',
                    marginRight : '-20px',
                    marginLeft : '-20px',
                    marginTop : '-20px',
                    backgroundColor : '#26a69a'
                },
                headerPaperH4 : {
                    color : '#FFF',
                    marginTop : '0px',
                    marginBottom : '0px',
                    position : 'relative',
                    top : '29px'
                }
            }
        }
        return (
            <div style={styles.signupForm.mainForm} className="login text-center">
                <Row>
                    <Col xs={12} sm={6} md={6} lg={6}>

                    </Col>
                    <Col xs={12} sm={6} md={6} lg={6}>

                    </Col>
                </Row>
                
                <Paper style={styles.signupForm.mainPaper} >
                    <div style={styles.signupForm.headerPaper} className="text-center">
                        <h4 style={styles.signupForm.headerPaperH4}>Sign Up</h4>
                        <p className="error-message">{this.state.errorMessage}</p> 
                    </div>
                    <FormGroup controlId="usrName">
                        <TextField 
                            id="usrName"
                            value={this.state.usrName} 
                            floatingLabelText={
                                <div>
                                    <i className="material-icons">assignment_ind</i>
                                    <span>User Name</span>
                                </div>
                                }
                            floatingLabelStyle={{top:'31px'}}
                            hintText="Set your user name" 
                            fullWidth={true}
                            onChange={(event)=>{this.handleEvent(event, constant.USERNAME_INPUT_HANDLE), 'onChange'}} />
                    </FormGroup>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <FormGroup controlId="password1">
                                <TextField 
                                    id="pwd1"
                                    value={this.state.password} 
                                    type="password"
                                    floatingLabelText={
                                        <div>
                                            <i className="material-icons">fingerprint</i>
                                            <span>Password</span>
                                        </div>
                                    }
                                    floatingLabelStyle={{top:'31px'}}
                                    fullWidth={true}
                                    onChange={(event)=>{this.handleEvent(event, constant.PASSWORD_INPUT_HANDLE, 'onChange')}}/>
                            </FormGroup>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                             <FormGroup controlId="password2">
                                <TextField 
                                    id="pwd2"
                                    value={this.state.rePassword}  
                                    floatingLabelText= {
                                        <div>
                                            <i className="material-icons">fingerprint</i>
                                            <span>Confirm Password</span>
                                        </div>
                                    } 
                                    floatingLabelStyle={{top:'31px'}}
                                    fullWidth={true}
                                    type="password"
                                    onChange={(event)=>{this.handleEvent(event, constant.REPASSWORD_INPUT_HANDLE, 'onChange')}}/>
                            </FormGroup>
                        </Col>
                    </Row> 
                    <FormGroup controlId="realName">
                        <TextField 
                            id="realName"
                            value={this.state.realName} 
                            floatingLabelText= {
                                        <div>
                                            <i className="material-icons">face</i>
                                            <span>Your real name</span>
                                        </div>
                            } 
                            hintText="What is your real name" 
                            floatingLabelStyle={{top:'31px'}}
                            fullWidth={true} 
                            onChange={(event)=>{this.handleEvent(event, constant.REALNAME_INPUT_HANDLE, 'onChange')}}/>                    
                    </FormGroup>
                    
                    <FormGroup controlId="email">
                        <TextField 
                            id="email"
                            value={this.state.email}  
                            floatingLabelText= {
                                        <div>
                                            <i className="material-icons">contact_mail</i>
                                            <span>Your Email</span>
                                        </div>
                            } 
                            hintText="abcxyz@xxx.com" 
                            floatingLabelStyle={{top:'31px'}}
                            fullWidth={true}
                            onChange={(event)=>{this.handleEvent(event, constant.EMAIL_INPUT_HANDLE, 'onChange')}}/>
                    </FormGroup>
                    
                    <FormGroup controlId="description">
                        <h4 style={styles.signupForm.secondaryHeader}>Write something about you</h4>
                        <TextField
                            id="description"
                            value={this.state.description}
                            multiLine={true}
                            fullWidth={true}
                            rows={3}
                            onChange={(event)=>{this.handleEvent(event, constant.DESCRIP_INPUT_HANDLE, 'onChange')}}
                        />
                    </FormGroup>
                    
                    <FormGroup>
                        <RaisedButton label="SUBMIT" secondary={true} onTouchTap={this.formProcess.bind(this)}/>
                    </FormGroup>
                </Paper> 
            </div>
        );
    }
}

export default ResearchSignup;
