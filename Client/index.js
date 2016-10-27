import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from './Module/index.navcustom.js';
import Header from './Module/index.header.js';
import ViewStick from './Module/index.viewStick.js';
class Index extends Component {
    constructor(props) {
        super(props);
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


