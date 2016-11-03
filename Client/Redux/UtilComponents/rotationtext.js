import React, {Component} from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class RotationText extends Component {
    
    constructor(props) {
        super(props);
        this.state = {content : this.props.items[0], index : 1};
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        
        var index = 0;
        var _this = this;
        function loop() {
            setTimeout(function() {
                var newState = {content : _this.props.items[index]};
                _this.setState(newState);
                index = (index++)%4;
                console.log(index);
                if(true) {
                    loop();
                }   
            }, 1000)
            
        }
    }

    handleClick() {
        var num = this.props.items.length - 1;
        console.log(num);
        var _index;
        if(this.state.index < num) {
            _index = this.state.index + 1;
        }else{
            _index = 0;
        }
        var newState = {content : this.props.items[_index], index : _index};
        console.log(newState);
        this.setState(newState);
        $("span.span-container").width(this.props.widths[_index]);
    }
    
    render() {

        return(
            /*<ReactCSSTransitionGroup
                    transitionName="box"
                    transitionEnterTimeout={400}
                    transitionLeaveTimeout={400}>*/
                        <span className="span-container">
                                <ReactCSSTransitionGroup
                                    transitionName="box-content"
                                    className="box-content"
                                    transitionEnterTimeout={900}
                                    transitionLeaveTimeout={900}>
                                    <p key={this.state.content} onClick={this.handleClick}>{this.state.content}</p>
                                </ReactCSSTransitionGroup>
                        </span>
            /*</ReactCSSTransitionGroup>*/
        );
    }

}

export default RotationText;
