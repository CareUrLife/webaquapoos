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
        let xhr = new XMLHttpRequest();
        xhr.open('post', '/research/auth');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('Authorization', 'bearer ' + Auth.getToken());
        xhr.responseType = 'json';

        xhr.onload = function() {
            if(this.state === 200) {
                browserHistory.push('/research'); 
            }
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
            <div>
				<h2>Login</h2>
             	<Form horizontal onSubmit={this.formProcess.bind(this)}>
					<FormGroup controlId="usrName">
						<Col componentClass={ControlLabel} sm={2}>
							Email
  						</Col>
  						<Col sm={10}>
							<FormControl ref="usrname" type="text" placeholder="Your User Name" />
  						</Col>
					</FormGroup>
					<FormGroup controlId="password">
						<Col componentClass={ControlLabel} sm={2}>
							Password
  						</Col>
  						<Col sm={10}>
							<FormControl ref="password" type="password" placeholder="Password" />
  						</Col>
					</FormGroup>
					<FormGroup>
						<Col smOffset={2} sm={10}>
							<Button type="submit" onClick={this.formProcess.bind(this)}>
	  							Sign in
							</Button>
  						</Col>
					</FormGroup>
				</Form>
            </div>
        );
    }

}

export default ResearchLogin;
