import React, {Component} from 'react';
import {Tab, Row, Col, Nav, NavItem} from 'react-bootstrap';
import ContainerGarden from './Containers/research.container.garden.js';
import Garden from './research.garden.js';
import DetailStatus from './research.detailStatus.js';
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
        let iconStyle = {marginRight : "5px"} 
        return(
        <div>
            <nav className="cd-side-nav">
                <ul>
                    <li className="cd-label">Main</li>
                    <li className={this.state.activeTab == 0 ? "active" : ""} onClick={() => this.toggleTab(0)}>
                        <a><i style={iconStyle} className="fa fa-paw"></i>Your Garden</a>
                    </li>
                    <li className={this.state.activeTab == 1 ? "active" : ""} onClick={() => this.toggleTab(1)} >
                        <a><i style={iconStyle} className="fa fa-pie-chart"></i>Statistic</a>
                    </li>
                    <li className={this.state.activeTab == 2 ? "active" : ""} onClick={() => this.toggleTab(2)} >
                        <a><i style={iconStyle} className="fa fa-university"></i>News Feed</a>
                    </li>
                </ul>
            </nav>
            <TabContent units={this.props.units} numUnit={this.props.numUnit} content={this.state.contentTabs[this.state.activeTab]}/>
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
                    <Col sm={4} md={4} xs={12}>
                        <img className="img-circle" id="profile-picture" src="/Images/Research/user-face.jpg"></img>
                    </Col>
                    <Col id="user-detail" sm={8} md={8} xs={12}>
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
            <div className="content-wrapper">
                <div className="container-fluid">
                    {React.cloneElement(this.props.content, {units : this.props.units, numUnit : this.props.numUnit})}
                </div>
            </div>
        )
    }
}
export default ResearchDashboard;



