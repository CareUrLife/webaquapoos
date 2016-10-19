import React from 'react'


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
                </div>
            </nav>
        );
    }
}
