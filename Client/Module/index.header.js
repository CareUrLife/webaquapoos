import React, {Component} from 'react';


class Footer extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        var media;
        if(this.props.media.mType === "video") {
            media = (<iframe src={this.props.media.mSrc} frameborder=0 webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe>);
        }else if(this.props.media.mType === "") {
            media = (<img src={this.props.media.mSrc}>);
        }
        return (
            <header>
                <div className="videowrap">
                    <div className="wrap">
                        <div className="half">
                            <h2>Aquapo-OS</h2>
                            <p>Brevity Introduction Sentence about Aquapo-OS</p>
                        </div>
                    </div>
                    <div className="mediabox">
                        {media}
                    </div>
                </div> 
            </header>
        );
    }
} 
