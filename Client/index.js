import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from './Module/index.nav.js';
class Index extends Component {
    constructor(props) {
        super(props);
    } 

    render() {
        return(
            <Nav items={[{link:'#', name: 'Đăng ký', key: "dk"}, {link:'#', name: 'Blog', key: "bl"}, {link:'#', name: 'Phản hồi', key: "fb"}, {link:'#', name: 'Về chúng tôi', key: 'am'}]}/>
        );
    }
}


ReactDOM.render(<Index/>, document.getElementById('root'));


