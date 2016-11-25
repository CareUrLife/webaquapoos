import {Component} from 'react';
import {browserHistory} from 'react-router';
import {Form, FormGroup, Col, FormControl, Button} from 'react-bootstrap';

class ResearchSignup extends Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open('post','/research/auth');
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
        event.preventDefault();
        let _this = this;
        let newUser = 'usrName=' + encodeURIComponent(this.refs.usrName.getValue()) +
            '&realName=' + encodeURIComponent(this.refs.realName.getValue()) +
            '&isAddmin=false' + 
            '&email=' + encodeURIComponent(this.refs.email.getValue()) +
            '&password=' + encodeURIComponent(this.refs.password1.getValue());
        let xhr =new XMLHttpRequest();
        xhr.open('post', '/research/signup');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.responseType = 'json';

        xhr.onload = function() {
            let state = {};

            if(this.state === 200) {
                state.errorMessage = '';
                state.errors = {};

                this.setState(state);

                browserHistory.push('/login');
            } else {
                state.errorMessage = this.response.message;
                state.errors = this.response.error ? this.response.errors : {};

                _this.setState(state);
            }
        };

        xhr.send();
    }

    render() {
        return (
            <Form horizontal>
                <FormGroup controlId="usrName">
                    <Col componentClass={ControlLabel} sm={2}>
                        User name
                    </Col>
                    <Col sm={10}>
                        <FormControl ref="usrName" type="text" placeholder="User Name" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="password1">
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={10}>
                        <FormControl ref="password1" type="password" placeholder="Password" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="password2">
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={10}>
                        <FormControl ref="password2" type="password" placeholder="Password" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="realName">
                    <Col componentClass={ControlLabel} sm={2}>
                        Real name 
                    </Col>
                    <Col sm={10}>
                        <FormControl ref="realName" type="text" placeholder="Real Name" />
                    </Col>
                </FormGroup>
                
                <FormGroup controlId="email">
                    <Col componentClass={ControlLabel} sm={2}>
                        Email
                    </Col>
                    <Col sm={10}>
                        <FormControl ref="email" type="text" placeholder="Your Email" />
                    </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Checkbox>Remember me</Checkbox>
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
        );
    }
}

export default ResearchSignup;
