import React, {Component} from 'react';
import Garden from './research.dashboard.garden.js';
import Statistic from './research.dashboard.statistic.js';
import NewsFeed from './research.dashboard.newsfeed.js';
import Auth from '../../APIs/Auth.js';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';

const contentTabs = [];




class ResearchDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = { selectedIndex : 0};
         
        this.select = this.select.bind(this);
    }


    
    select(eventId) {
        let newState = {};
        newState = Object.assign({}, this.state, {selectedIndex : eventId});
        this.setState(newState);
    }

    componentDidMount() {
        /* 
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
        */
        contentTabs[0] = <Garden onUnitBarClick = {this.props.onUnitBarClick}
                                        onBtnAddVegetClick = {this.props.onBtnAddVegetClick}
                                        onBtnDelVegetClick = {this.props.onBtnDelVegetClick}
                                        onButtonAddClick = {this.props.onButtonAddClick}
                                        onCheckVisibilityClick = {this.props.onCheckVisibilityClick}
                                        units = {this.props.units}
                                        numUnit = {this.props.numUnit}
                                        user = {this.props.user}
                                        appData = {this.props.appData}
                                        />;
        contentTabs[1] = React.createElement(Statistic);
        contentTabs[2] = React.createElement(NewsFeed);
    }

    render() {
        let iconStyle = {marginRight : "5px"} 
        const gardenIcon = <FontIcon className="material-icons">local_florist</FontIcon>;
        const statisticIcon = <FontIcon className="material-icons">assessment</FontIcon>;
        const newFeedIcon = <FontIcon className="material-icons">book</FontIcon>;
        return(
            <div>
                {contentTabs[this.state.selectedIndex]}
                <Paper zDepth={1} style={{bottom:'0px', position: 'fixed', width : '100%'}}>
                    <BottomNavigation selectedIndex={this.state.selectedIndex}>
                        <BottomNavigationItem label="Your Garden" icon={gardenIcon} onTouchTap={()=>this.select(0)}/>
                        <BottomNavigationItem label="Statistic" icon={statisticIcon} onTouchTap={()=>this.select(1)}/>
                        <BottomNavigationItem label="Resources" icon={newFeedIcon} onTouchTap={()=>this.select(2)}/>
                    </BottomNavigation>
                </Paper>
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

export default ResearchDashboard;



