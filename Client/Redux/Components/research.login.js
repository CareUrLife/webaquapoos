import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {Form,FormControl, FormGroup, Col, Input, Button, ControlLabel} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Auth from '../../APIs/Auth.js';
class ResearchLogin extends Component {

    constructor(props) {
        super(props);
        this.state={};
    }

    componentDidMount() {
        if(Auth.isUserAuthenticated()){
            this.props.redirect('/research');
        }
    }

    formProcess(event) {
        console.log("Form Process");
        event.preventDefault();
        let user = 'usrName='+encodeURIComponent(ReactDOM.findDOMNode(this.refs.usrname).value)+
                    '&password='+encodeURIComponent(ReactDOM.findDOMNode(this.refs.password).value);
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
                _this.props.redirect('/research');
            }else{
                // failure
                state=Object.assign({}, _this.state, {errorMessage : this.response.message});
                _this.setState(state);
            }
        };

        xhr.send(user);
    }

    render() {
        return (
            <div className="login text-center">
                <h3 className="login-heading">AQUAPOOS RESEARCHER</h3>
                <p className="background-line">
                    <span>Log in</span>
                </p>
                <p className="error-message">{this.state.errorMessage}</p>
             	<Form horizontal onSubmit={this.formProcess.bind(this)}>
					<FormGroup controlId="usrName">
							<FormControl ref="usrname" type="text" placeholder="Your User Name" />
					</FormGroup>
					<FormGroup controlId="password">
							<FormControl ref="password" type="password" placeholder="Password" />
					</FormGroup>
					<FormGroup>
							<Button type="submit" onClick={this.formProcess.bind(this)}>
	  							LOG IN
							</Button>
					</FormGroup>
                    <hr></hr>
                    <a>Forgot Password</a>
				</Form>
            </div>
        );
    }

}

export default ResearchLogin;
