import React, {Component} from 'react'


class Nav extends Component {

    constructor(props) {
        super(props);
    } 

    render() {
        return (
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">AquapoOS</a>
                    </div>
                    <div class="collapse narbar-collapse" id="navbar-content">
                        <li class="active"><a href="#">Home</a></li>
                        {this.props.items.map(function(item, i) {
                            return (
                                <li><a href={item.link}>{item.name}</a></li>
                            ); 
                        })}
                    </div>
                </div>
            </nav>
        );
    }
}
