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
            <div>
                <Nav items={[{link:'#', name: 'Đăng ký', key: "dk"}, {link:'#', name: 'Blog', key: "bl"}, {link:'#', name: 'Phản hồi', key: "fb"}, {link:'#', name: 'Về chúng tôi', key: 'am'}]}/>
                <Header media={{mType : "image", mSrc : "Images/header.jpg"}}/>
            </div>
        );
    }
}


ReactDOM.render(<Index/>, document.getElementById('root'));


