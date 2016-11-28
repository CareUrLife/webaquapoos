import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {Form, FormGroup, Col, FormControl, Button, Checkbox} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Auth from '../../APIs/Auth.js';
class ResearchSignup extends Component {
    
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
        event.preventDefault();
        let _this = this;
        let newUser = 'usrName=' + encodeURIComponent(ReactDOM.findDOMNode(this.refs.usrName).value) +
            '&realName=' + encodeURIComponent(ReactDOM.findDOMNode(this.refs.realName).value) +
            '&isAddmin=false' + 
            '&email=' + encodeURIComponent(ReactDOM.findDOMNode(this.refs.email).value) +
            '&password=' + encodeURIComponent(ReactDOM.findDOMNode(this.refs.password1).value);
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

    render() {
        return (
            <div className="login text-center">
                <p className="background-line">
                    <span>Sign Up</span>
                </p>
                <p className="error-message">{this.state.errorMessage}</p>
                <Form horizontal>
                    <FormGroup controlId="usrName">
                            <FormControl ref="usrName" type="text" placeholder="User Name" />
                    </FormGroup>

                    <FormGroup controlId="password1">
                            <FormControl ref="password1" type="password" placeholder="Password" />
                    </FormGroup>

                    <FormGroup controlId="password2">
                            <FormControl ref="password2" type="password" placeholder="Retype Password" />
                    </FormGroup>

                    <FormGroup controlId="realName">
                            <FormControl ref="realName" type="text" placeholder="Real Name" />
                    </FormGroup>
                    
                    <FormGroup controlId="email">
                            <FormControl ref="email" type="text" placeholder="Your Email" />
                    </FormGroup>

                    
                    <FormGroup>
                        <Button type="submit" onClick={this.formProcess.bind(this)}>
                          Sign in
                        </Button>
                    </FormGroup>
                </Form> 
            </div>
        );
    }
}

export default ResearchSignup;
