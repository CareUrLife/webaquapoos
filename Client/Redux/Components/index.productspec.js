import React, {Component} from 'react';
import Update from 'react-addons-update';
import RotationText from '../UtilComponents/rotationtext.js'

class ProductionSpec extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        
        return(
            <div className="prodspec">
                <div className="container-fluid">
                    <div className="shortintro left">
                        <h1 className="colorblack"></h1>
                        <RotationText items={["Tuan","Thuy","Bang","Duong"]}/>
                    </div>

                    <div className="mediabox right summarize">
                        <img src={this.props.media.mSrc}/>
                    </div>
                     
                </div>
            </div> 
        );
    }
}



export default ProductionSpec; 
