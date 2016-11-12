import React, {Component} from 'react';

class PopOver extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        <div class="alert-confirmation-container">
            <i className="fa fa-times" aria-hidden="true" data-toggle="confirmation"></i>
            <div className="popover fade top in">
                <h3 className="popover-title">{this.props.title}</h3>
                <div className="popover-content text-center">
                    <div class="popover-content text-center">
                        <div class="btn-group">
                            <a class="btn btn-small btn-primary" href="#" target="_self">
                                <i class="icon-ok-sign icon-white"></i> 
                                 {this.props.yes}
                            </a>
                            <a class="btn btn-small" data-dismiss="confirmation">
                                <i class="icon-remove-sign"></i> 
                                {this.props.no}
                            </a>
                        </div>
                    </div>  
                </div>
            </div>
        </div>

    }
}
