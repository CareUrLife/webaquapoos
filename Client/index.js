import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from './Module/index.nav.js';
import Header from './Module/index.header.js';
class Index extends Component {
    constructor(props) {
        super(props);
    } 

    render() {
        return(
            <div className="container-root">
                <Nav items={[{link:'#', name: 'Tính năng', key: "dk", className: "nav-normal"}, {link:'#', name: 'Blog', key: "bl", className: "nav-normal"}, {link:'#', name: 'Về chúng tôi', key: "fb", className: "nav-normal"}, {link:'#', name: 'Đặt hàng', key: 'am', className: "nav-special"}]}/>
                <Header media={{mType : "image", mSrc : "Images/header.jpg"}}/>
            </div>
        );
    }
}


ReactDOM.render(<Index/>, document.getElementById('root'));


