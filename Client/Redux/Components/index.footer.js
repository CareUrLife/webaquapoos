import React, {Component} from 'react';


class Footer extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <footer>
                <img src="/Images/footer.jpg"></img>
                <div className="describe">
                    <p>CareUrLife - đón đưa những giá trị đích thực trong từng
                        khoảnh khắc của cuộc sống.</p>
                    <div className="contact-link-container">
                        <a>Liên hệ chúng tôi</a>
                    </div>
                </div>

                <div className="digital-contact row">
                    <div className="col-md-4 col-sm-12 col-xs-12 col-lg-4">
                        <a>
                            <i className="fa fa-facebook"></i>
                            <br/>
                            "facebook"
                        </a>
                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12 col-lg-4">
                        <a>
                            <i className="fa fa-pencil"></i>
                            <br/>
                            "blog"
                        </a>
                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12 col-lg-4">
                        <a>
                            <i className="fa fa-github"></i>
                            <br/>
                            "github"
                        </a>
                    </div>
                </div>

                <div className="copy-right">
                </div>

            </footer>
        );
    }
}

export default Footer;
