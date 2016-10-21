import Nav from './Module/index.nav.js';
import react, {Component} from 'react';
import ReactDOM from 'react-dom';

class Index extends Component {
    constructor(props) {
        super(props);
    } 

    render() {
        return(
            <Nav items={{link:'#', name: 'Đăng ký'}, {link:'#', name: 'Blog'}, {link:'#', name: 'Phản hồi'}, {link:'#', name: 'Về chúng tôi'}}/>
        )
    }
}


ReactDOM.render(<Index/>, document.getElementById('root'));


