import React, {Component} from 'react';
import {Tab, Row, Col, Nav, NavItem} from 'react-bootstrap';
import ContainerGarden from './Containers/research.container.garden.js';
import Garden from './research.garden.js';
import DetailStatus from './research.detailStatus.js';
import UserInfo from './research.dashboard.userinfo.js';
import Statistic from './research.dashboard.statistic.js';
import NewsFeed from './research.dashboard.newsfeed.js';
import Auth from '../../APIs/Auth.js';

class ResearchDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {contentTabs : [], activeTab : 0};
        let contentTabs = this.state.contentTabs;
        contentTabs[0] = <Garden onUnitBarClick = {this.props.onUnitBarClick}
                                 onBtnAddVegetClick = {this.props.onBtnAddVegetClick}
                                 onBtnDelVegetClick = {this.props.onBtnDelVegetClick}
                                 onButtonAddClick = {this.props.onButtonAddClick}
                                 onCheckVisibilityClick = {this.props.onCheckVisibilityClick}/>;
        contentTabs[1] = React.createElement(Statistic);
        contentTabs[2] = React.createElement(NewsFeed);
        contentTabs[3] = React.createElement(UserInfo, {user : this.props.user});
 
        this.toggleTab = this.toggleTab.bind(this);
    }
    
    toggleTab(eventId) {
        let newState = {};
        newState = Object.assign({}, this.state, {activeTab : eventId});
        this.setState(newState);
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
            <div id="wrapper" defaultActiveKey="first">
                <div>
                  <div id="sidebar-wrapper">
                      <UserInfoBox className="nav-tabs-container" toggleTabs={[null, null, ()=>this.toggleTab(3)]}/>
                    <hr></hr>
                    <div id="nav-tabs-header" className="nav-tabs-container">
                          <h3>Dashboard</h3>
                    </div>
                    <Nav bsStyle="pills" stacked>
                        <NavItem eventKey="first" className="nav-tabs-container" onClick={() => this.toggleTab(0)}>
                            <i className="fa fa-1x fa-pagelines" aria-hidden="true"></i>
                            <span style={{paddingLeft : "8px"}}>Your Garden</span>
                      </NavItem>
                      <NavItem eventKey="second" className="nav-tabs-container" onClick={() => this.toggleTab(1)}>
                            <i className="fa fa-1x fa-line-chart" aria-hidden="true"></i>
                            <span style={{paddingLeft : "8px"}}>Statistic</span>
                      </NavItem>
                      <NavItem eventKey="third" className="nav-tabs-container" onClick={() => this.toggleTab(2)}>
                            <i className="fa fa-1x fa-university" aria-hidden="true"></i>
                            <span style={{paddingLeft : "8px"}}>News Feed</span>
                      </NavItem>
                    </Nav>
                </div>
                <TabContent units={this.props.units} numUnit={this.props.numUnit} content={this.state.contentTabs[this.state.activeTab]}/>
            </div>
              </div> 
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
                        <i className="fa fa-bell" aria-hidden="true" onClick={this.props.toggleTabs[0]}></i>
                        <i className="fa fa-cog" aria-hidden="true" onClick={this.props.toggleTabs[1]}></i>
                        <i className="fa fa-user" aria-hidden="true" style={{cursor:"pointer"}} onClick={this.props.toggleTabs[2]}></i>
                        
                    </Col>
                </Row>
            </div>
        );
    }
}

class TabContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="page-content-wrapper">
                <div className="container-fluid">
                    {React.cloneElement(this.props.content, {units : this.props.units, numUnit : this.props.numUnit})}
                </div>
            </div>
        )
    }
}
export default ResearchDashboard;



