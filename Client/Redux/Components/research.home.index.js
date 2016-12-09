import Auth from '../../APIs/Auth.js';
import React, {Component} from 'react';


class ResearchHomeIndex extends Component {

    constructor(props) {
        super(props); 
    }

    componentDidMount() {
        if(Auth.isUserAuthenticated()) {
            
            let xhr = new XMLHttpRequest();
            let _this = this;
            console.log(this.props);
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

    render() {
        return (
            <div className="container-fluid">
                <h3>Welcome to Song He Lab Research Area Online , Hello {this.props.user.info.userName} </h3>
            </div>
        );
    }
}

export default ResearchHomeIndex;
