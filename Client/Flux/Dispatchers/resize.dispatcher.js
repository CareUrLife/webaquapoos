var Dispatcher = require("./common.dispatcher.js");
var assign = require('object-assign');

var ResizeDispatcher = assign({}, Dispatcher.prototype, { 
    /**
    * A bridge function between the views and the dispatcher, marking the action
    * as a view action.  Another variant here could be handleServerAction.
    * @param  {object} action The data coming from the view.
    */

    handleViewAction: function(resize) {
        this.dispatch({
            windowSize {
                height : resize.height;
                width : resize.width;
            }
        });
    }
});

module.exports = ResizeDispatcher;
