import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {Form,FormControl, FormGroup, Col, Input, Button, ControlLabel} from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import ReactDOM from 'react-dom';
import Auth from '../../APIs/Auth.js';

const constant = {
    USERNAME_INPUT_HANDLE : 1,
    PASSWORD_INPUT_HANDLE : 2
};


class ResearchLogin extends Component {

    constructor(props) {
        super(props);
        this.state={ errorMessage : ''};
        this.formProcess = this.formProcess.bind(this);
        this.handleEvent = this.handleEvent.bind(this);
    }

    componentDidMount() {
        if(Auth.isUserAuthenticated()){
            this.props.redirect('/research');
        }
    }

    formProcess(event) {
        console.log("Form Process");
        event.preventDefault();
        let user = 'usrName='+this.state.usrName+
                    '&password='+this.state.usrPwd;
        let xhr = new XMLHttpRequest();
        xhr.open('post', '/research/login');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.responseType='json';
        let _this = this;
        xhr.onload = function() {
            let state={};
            console.log(this.status);
            if(this.status === 200) {
                // success
                state=Object.assign({}, _this.state, {errorMessage : ''});
                _this.setState(state);
                Auth.authenticateUser(this.response.token);
                _this.props.setUserInfo(this.response.researcherData);
                _this.props.redirect('/research');
            }else{
                // failure
                state=Object.assign({}, _this.state, {errorMessage : this.response.message.main});
                _this.setState(state);
            }
        };

        xhr.send(user);
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
                
        }
    }

    render() {
        const styles = {
            loginForm : {
                mainForm : {
                    paddingTop : '30px'
                },
                mainPaper : {
                    padding : '20px'
                },

                forgotPass : {
                    fontSize : '1rem',
                    cursor : 'pointer'
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
                }
            }
        }
        return (
            <div style={styles.loginForm.mainForm} className="login text-center">
                <span style={styles.loginForm.logo}>(&#123;&#125;)</span>
                <h1 style={styles.loginForm.header}>Log in to Aquapoos Researcher</h1>
                <hr>
                </hr>
                <p style={styles.loginForm.errorMessage}>{this.state.errorMessage}</p>
                <Paper style={styles.loginForm.mainPaper}>
                    <Form horizontal >
                        <FormGroup controlId="usrName">
                            <TextField key="usrName"  floatingLabelText="User Name" hintText="User Name" value={this.state.usrName}
                                onChange={(event)=>{this.handleEvent(event, constant.USERNAME_INPUT_HANDLE, 'onChange')}}/>
                        </FormGroup>
                        <FormGroup controlId="password">
                            <TextField key="usrPwd"  floatingLabelText="Password" hintText="Your Password" value={this.state.usrPwd} 
                                onChange={(event)=>{this.handleEvent(event, constant.PASSWORD_INPUT_HANDLE, 'onChange')}}/>
                        </FormGroup>
                        <FormGroup>
                            <RaisedButton label="LOG IN" primary={true} onTouchTap={this.formProcess.bind(this)}>
                            </RaisedButton>
                        </FormGroup>
                        <a style={styles.loginForm.forgotPass}>Forgot Your Password</a>
                    </Form>
                </Paper>
            </div>
        );
    }

}

export default ResearchLogin;
