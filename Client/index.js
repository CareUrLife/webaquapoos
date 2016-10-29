import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Update from 'react-addons-update';
import Nav from './Module/index.navcustom.js';
import Header from './Module/index.header.js';
var ResizeActions = require('./Flux/Actions/resize.actions.js');

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {windowSize : {}};
        this.updateWindowSize = this.updateWindowSize.bind(this);
    } 

    updateWindowSize() {
        var w = window, d = document, documentElement = d.documentElement,
            body = d.getElementsByTagName('body')[0],
            width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
            height = w.innerHeight || documentElement.clientHeight || body.clientHeight;
        var newState = Update(this.state, {windowSize: {$set: {width: width, height : height}}});
        this.setState(newState);
        ResizeActions.setWindowSize(newState.windowSize);
    }


    componentDidMount () {
        window.addEventListener('resize', this.updateWindowSize);
        this.updateWindowSize();
    }

    componentWillUnmount () {
        window.removeEventListener('resize', this.updateWindowSize);
    }

    render() {
        return(
            <div className="container-root">
                <Nav aboutItems={[{reflink:'#', text: 'Tính năng', key: "dk", className: "nav-normal  items"}, {reflink:'#', text: 'Blog', key: "bl", className: "nav-normal items"}, {reflink:'#', text: 'Về chúng tôi', key: "fb", className: "nav-normal items"}]}/>
                <Header media={{mType : "image", mSrc : "Images/header.jpg"}}/>
            </div>
        );
    }
}


ReactDOM.render(<Index/>, document.getElementById('root'));


