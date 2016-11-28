import React, {Component} from 'react';
import {Tab, Row, Col, Nav, NavItem} from 'react-bootstrap';
import ContainerGarden from './Containers/research.container.garden.js';
import DetailStatus from './research.detailStatus.js'
import Auth from '../../APIs/Auth.js';

class ResearchDashboard extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let _this = this;
        if(Auth.getToken() !== null && Auth.getToken() !== undefined) {
            let xhr = new XMLHttpRequest();
            xhr.open('post', '/research/auth');
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.setRequestHeader('Authorization', 'bearer ' + Auth.getToken());
            xhr.responseType = 'json';

            xhr.onload = function() {
                if(this.status === 200) {
                    //get data
                }else{
                    _this.props.redirect('/research/login');
                }
            }

            xhr.send();

        }else{
            this.props.redirect('/research/login');
        }
    }

    render() {
        return(
            <div>
            <Tab.Container id="wrapper" defaultActiveKey="first">
                <div>
                  <div id="sidebar-wrapper">
                    <UserInfoBox className="nav-tabs-container"/>
                    <hr></hr>
                    <div id="nav-tabs-header" className="nav-tabs-container">
                          <h3>Dashboard</h3>
                    </div>
                    <Nav bsStyle="pills" stacked>
                      <NavItem eventKey="first" className="nav-tabs-container">
                            <i className="fa fa-1x fa-pagelines" aria-hidden="true"></i>
                            <span style={{paddingLeft : "8px"}}>Your Garden</span>
                      </NavItem>
                      <NavItem eventKey="second" className="nav-tabs-container">
                            <i className="fa fa-1x fa-line-chart" aria-hidden="true"></i>
                            <span style={{paddingLeft : "8px"}}>Statistic</span>
                      </NavItem>
                      <NavItem eventKey="third" className="nav-tabs-container">
                            <i className="fa fa-1x fa-university" aria-hidden="true"></i>
                            <span style={{paddingLeft : "8px"}}>News Feed</span>
                      </NavItem>
                    </Nav>
                  </div>
                  <div id="page-content-wrapper">
                    <Tab.Content animation>
                      <Tab.Pane eventKey="first">
                        <ContainerGarden/>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                            Statistical
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                            News Feed
                      </Tab.Pane>
                    </Tab.Content>
                </div>
            </div>
              </Tab.Container> 
            </div>
        ); 
    }
}


class UserInfoBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="user-info" className={this.props.className}>
                <Row>
                    <Col sm={4} md={4} xs={4}>
                        <img className="img-circle" id="profile-picture" src="/Images/Research/user-face.jpg"></img>
                    </Col>
                    <Col sm={8} md={8} xs={8}>
                        <span>Welcome, <strong>Bang</strong></span>
                        <br></br>
                        <i className="fa fa-bell" aria-hidden="true"></i>
                        <i className="fa fa-cog" aria-hidden="true"></i>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default ResearchDashboard;



