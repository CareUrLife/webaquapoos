import React, {Component} from 'react';
import {Form, FormGroup, Col, FormControl, Button} from 'react-bootstrap';
var Auth = require('../../APIs/Auth.js');
class ResearchLogin extends Component {

    constructor(props) {
        super(props);
        this.state={};
    }

    formProcess(event) {
        event.preventDefault();
        let user = 'usrname'+encodeURIComponent(this.refs.usrname.getValue())+
                    '&password='+encodeURIComponent(this.refs.password.getValue());
        let xhr = new XMLHttpRequest();
        xhr.open('post', '/auth/login');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.responseType='json';
        let _this = this;
        xhr.onload = function() {
            let state={};
            if(this.status == 200) {
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
					<FormGroup controlId="usrname">
						<Col componentClass={ControlLabel} sm={2}>
							Email
  						</Col>
  						<Col sm={10}>
							<FormControl ref="usrname" type="text" placeholder="Email" />
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
							<Button type="submit">
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
