var ResizeDispatcher = require('../Dispatchers/resize.dispatcher.js');

function setWindowSize(windowSize) {
    ResizeDispatcher.handleViewAction(windowSize); 
    console.log("action ");
}

exports.setWindowSize = setWindowSize;
