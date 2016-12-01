import React, {Component} from 'react';

class UserInfo extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="fluid-container">
                <div id="userinfo-box-header">
                    <h4>PROFILE</h4>
                </div>
                <div className="container row" id="userinfo-box-body">
                    <div className="col-md-8 col-lg-8 col-sm-12 row">
                        <div className="col-md-3 col-lg-3 col-sm-3">
                            <img className="img-circle" id="profile-picture" src="/Images/Research/user-face.jps"></img>
                        </div>
                        <div className="col-md-9 col-lg-9 col-sm-9">
                            <h4><strong>{this.props.user.info.realName}</strong></h4>
                            <div className="user-description">
                                {this.props.user.info.description}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12">
                        <div className="user-props-list">
                            <span className="user-props">User Name</span>
                            :
                            <span className="user-props-detail">{this.props.user.info.usrName}</span>
                        </div>
                        <div className="user-props-list">
                            <span className="user-props">Email</span>
                            :
                            <span className="user-props-detail">{this.props.user.info.email}</span>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default UserInfo;
