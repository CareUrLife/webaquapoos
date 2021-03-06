import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Update from 'react-addons-update';
import Nav from './index.navcustom.js';
import Header from './index.header.js';
import ProductionSpec from './index.productspec.js'
import ProductQuote from './index.quote.js';
import Footer from './index.footer.js'

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
                <Nav windowSize={this.state.windowSize} aboutItems={[{reflink:'#', text: 'Tính năng', key: "dk", className: "nav-normal  items"}, {reflink:'#', text: 'Blog', key: "bl", className: "nav-normal items"}, {reflink:'#', text: 'Về chúng tôi', key: "fb", className: "nav-normal items"}]}/>
                <Header media={{mType : "image", mSrc : "Images/header.jpg"}}/>
                <ProductQuote/>
                <Footer/>
            </div>
        );
    }
}

export default Index;
