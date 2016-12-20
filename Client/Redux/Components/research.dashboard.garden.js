import React, {Component, PropTypes} from 'react';
import Update from 'react-addons-update';
import UnitBedGrow from './research.unitBedGrow.js';
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { Dropdown } from 'semantic-ui-react'
import RaisedButton from 'material-ui/RaisedButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import IconButton from 'material-ui/IconButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
var {Grid, Row, Col} = require('react-flexbox-grid');
var validateInput = require('../../APIs/ValidateForm.js').validateInput;

const EXPAND_TOOLBARSHEET = 0;
const ADD_UNIT_TOUCHTAP = 1;
const SHOW_UNIT_INFO = 2;

const expandHeight = {
    addUnit : 200,
    showInfo : 300,
    noChoice : 64
}
class Garden extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            inputs : {
                addUnitInput : {
                    unitId : {
                        value : "",
                        errMsg : ""
                    },
                    unitName : {
                        value : "",
                        errMsg : ""
                    },
                    fishType : {
                        value : "",
                        errMsg : ""
                    }, 
                    volume : {
                        value : "",
                        errMsg : ""
                    }
                },
                updateUnitInput : {
                    temperature : {
                        value : "",
                        errMsg : ""
                    },
                    ph : { 
                        value : "",
                        errMsg : ""
                    },
                    nitrat : {
                        value : "",
                        errMsh : ""
                    }
                }
            },
            toolbarSheet : {
                content : (<div>'No Content'</div>), // choose event
                expand : false,
                bottomRelativeHeightToHide : '-8px',// choose event
                bottomRelativeHeightToShow : '56px',
                height: 64
            },
            chooseItem : null,
            addButton : 'initial'
        }
        
        this.props.numUnit > 0 ? this.state.selectedUnitID = 0 : this.state.selectedUnitID = -1; 
        this.handleEvent = this.handleEvent.bind(this);
    }

    chooseItem(id, state) {
        const fishListNames =[];

        this.props.appData.fishListNames.forEach(function(fishName) {
            fishListNames.push({
                text : fishName,
                value : fishName
            })
        });
        const chooseParas = {
            noChoice : {
                expandHeight : expandHeight.noChoice,
                content : (<div>No Choice to show content</div>)
            },
            addUnit : {
                expandHeight : expandHeight.addUnit,
                content : (<Row>
                <Col xs={6} sm={6} md={3} lg={3}>
                    <h4> Unit name</h4>
                    <div className="ui input">
                        <input placeholder="Unit name..." type="text" style={{width: '100%'}}
                            onChange={(event)=>this.handleInput(event, 'addUnitInput', 'unitName')}/>
                    </div> 
                </Col>
                <Col xs={6} sm={6} md={3} lg={3}>
                    <h4> Unit ID</h4>
                    <div className="ui input">
                        <input placeholder="Unit Id..." type="text" style={{width: '100%'}}
                            onChange={(event)=>this.handleInput(event, 'addUnitInput', 'unitId')}/>
                    </div> 
                </Col>
                <Col xs={6} sm={6} md={3} lg={3}>
                    <h4> Fish Type </h4>
                    <Dropdown placeholder="select fish ..." selection search options={fishListNames}/>
                </Col>
                <Col xs={6} sm={6} md={3} lg={3}>
                    <h4>Volume</h4>
                    <div className="ui right labeled input">
                        <input placeholder="Volume ..." type="text" style={{width: '50%'}}
                            onChange={(event)=>this.handleInput(event, 'addUnitInput', 'volume')}/>
                        <div className="ui basic label">ml</div>
                        
                    </div> 
                </Col>
            </Row>)
            },
            showInfo : {
                expandHeight : expandHeight.showInfo,
                content : (<div>To do</div>)
            }
        }

        state.toolbarSheet.bottomRelativeHeightToHide = (56 - chooseParas[id].expandHeight) + 'px';
        state.toolbarSheet.height = chooseParas[id].expandHeight;
        state.toolbarSheet.content = chooseParas[id].content;
    }

    handleEvent(event, type, id) {
        
        if(type === EXPAND_TOOLBARSHEET) {
            let newState = Object.assign({}, this.state, {});
            newState.toolbarSheet.expand = !newState.toolbarSheet.expand;
            if(this.state.addButton === 'next') {
                newState.addButton = 'initial';
                this.chooseItem('noChoice', newState);
                newState.toolbarSheet.expand = false
            }
            this.setState(newState);
        }else if(type === ADD_UNIT_TOUCHTAP) {
            if(this.state.addButton === 'initial') {
                let newState = Object.assign({}, this.state, {addButton : 'next'});
                this.chooseItem('addUnit', newState);
                newState.toolbarSheet.expand = true;
                this.setState(newState); 
            }else{
                 
            }
        }else if(type === SHOW_UNIT_INFO) {
        
        }
    
    }

    handleInput(event, formId, inputName) {
        var newState = Object.assign({}, this.state);
        if(typeof(newState.inputs[formId]) === 'undefined') {
            newState.inputs[formId] = {};
        }
        newState.inputs[formId][inputName].value = event.target.value;
        this.setState(newState);
    }

    render() {
        const styles = {
            toolbar : {
                backgroundColor : '#009688',
                height : '64px',
                zIndex : '2'
            },
            toolbarSeparator : {
                marginRight : '8px'
            },
            toolbarContent : {
                textAlign : 'center',
                padding : '10px',
                height : (this.state.toolbarSheet.height) + 'px'
            }
        }
        return (
            <div>
                <Row >
                    <Col xs={0} sm={2} md={2} lg={2}></Col>
                    <Col xs={12} sm={8} md={8} lg={8}>
                        <Paper zDepth={1} style={{minHeight : '100vh'}}>
                            
                        </Paper>
                    </Col>
                    <Col xs={0} sm={2} md={2} lg={2}>
                    </Col>
                </Row>
                <Paper zDepth={0} style={{position: "fixed", bottom: this.state.toolbarSheet.expand ? this.state.toolbarSheet.bottomRelativeHeightToShow : this.state.toolbarSheet.bottomRelativeHeightToHide , width : '100%'}}>
                    <Row>
                        <Col xs={0} sm={2} md={2} lg={2}></Col>
                        <Col xs={12} sm={8} md={8} lg={8}>
                            
                            <Toolbar style={styles.toolbar}>
                                <ToolbarGroup firstChild={true}  style={{paddingLeft:"20px", paddingRight: "7px"}}>
                                    <FloatingActionButton  backgroundColor={(this.state.addButton === 'initial') ? 'rgb(254, 64, 129)' : 'rgb(230, 32, 32)'} mini={true} onTouchTap={(event) => this.handleEvent(event, ADD_UNIT_TOUCHTAP)}>
                                        <ContentAdd />
                                    </FloatingActionButton>
                                    <ToolbarSeparator style={{}}/>
                                </ToolbarGroup>
                                <ToolbarGroup>
                                    <div style= {{paddingTop : '3px'}}>
                                        <i className="material-icons">opacity</i>
                                    </div>
                                        {this.state.selectedUnitID == -1 ? (
                                            <span style={{paddingBottom : '3px', paddingLeft : '8px'}}>no unit be selected</span>
                                        ):(
                                            <span>{this.props.units}</span>
                                        )}
                                    <ToolbarSeparator style={{marginLeft: '-12px', marginRight: '8px'}}/>
                                    <Row>
                                        <Col xs={4} sm={4} md={4} lg={4}>
                                            <div style={{position : 'fixed'}}>abcd</div>
                                           <div className="ui left icon input">
                                               <input placeholder="Temperature..." type="text" style={{width: '100%'}}
                                                    onChange={(event)=>this.handleInput(event, 'updateUnitInput', 'temperature')}/>
                                               <i className="icon" aria-hidden="true">
                                                   <i style={{paddingTop : '5px'}} className="fa fa-2x fa fa-thermometer-full">
                                                   </i>
                                               </i>
                                            </div> 
                                        </Col>
                                        <Col xs={4} sm={4} md={4} lg={4}>
                                            <div className="ui left icon input">
                                                <input placeholder="pH..." type="text" style={{width: '100%'}}
                                                    onChange={(event)=>this.handleInput(event, 'updateUnitInput', 'ph')}/>
                                               <i className="icon" aria-hidden="true" >
                                                   <h3 style={{marginTop: '7px'}}>pH</h3>
                                               </i>
                                            </div>
                                        </Col>
                                        <Col xs={4} sm={4} md={4} lg={4}>
                                            <div className="ui left icon input">
                                                <input placeholder="Nitrat..." type="text" style={{width: '100%'}}
                                                    onChange={(event)=>this.handleInput(event, 'updateUnitInput', 'nitrat')}/>
                                               <i className="icon" aria-hidden="true">
                                                   <h3 style={{marginTop: '7px'}}>Ni</h3>
                                               </i>
                                            </div> 
                                        </Col>
                                    </Row>
                                    <ToolbarSeparator style={styles.toolbarSeparator}/>
                                    <RaisedButton secondary={true} label="Update"/>
                                    
                                </ToolbarGroup>
                                <ToolbarGroup lastChild={true}>
                                   <IconButton touch={true} style={{marginRight : '10px'}} onTouchTap={(event)=>this.handleEvent(event, EXPAND_TOOLBARSHEET)}>
                                       <NavigationExpandMoreIcon  />
                                    </IconButton> 
                                </ToolbarGroup>
                             
                            </Toolbar>
                            <Paper style={{position : 'relative', backgroundColor : 'rgb(238, 238, 238)' }} zDepth={0}>
                                <div style={styles.toolbarContent}>
                                    {this.state.toolbarSheet.content}
                                </div>
                            </Paper>
                        </Col>
                    </Row>
                </Paper>
            </div>

        )
    }
}

export default Garden;







