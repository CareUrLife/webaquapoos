import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Update from 'react-addons-update';
import Nav from './Module/index.navcustom.js';
import Header from './Module/index.header.js';
import ViewStick from './Module/index.viewStick.js';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state.windowSize = {};
    } 

    updateWindowSize() {
        var w = window, d = document, documentElement = d.documentElement,
            body = d.getElementsByTagName('body')[0],
            width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
            height = w.innerHeight || documentElement.clientHeight || body.clientHeight;
        var newState = Update(this.state, {windowSize: {$set: {width: width, height : height}}});
        this.setState(newState);
    }

    componentWillMount () {
        this.updateWindowSize();
    }

    componentDidMount () {
        window.addEventListener("resize", this.updateWindowSize());
    }

    componentWillUnmount () {
        window.removeEventListener("resize", this.updateWindowSize());
    }

    render() {
        return(
            <div className="container-root">
                <Nav items={[{link:'#', name: 'Tính năng', key: "dk", className: "nav-normal col-md-2 col-lg-2 col-sm-3 items"}, {link:'#', name: 'Blog', key: "bl", className: "nav-normal col-md-1 col-lg-1 col-sm-3 items"}, {link:'#', name: 'Về chúng tôi', key: "fb", className: "nav-normal col-md-2 col-lg-2 col-sm-3 items"}]}/>
                <Header media={{mType : "image", mSrc : "Images/header.jpg"}}/>
            </div>
        );
    }
}


ReactDOM.render(<Index/>, document.getElementById('root'));


