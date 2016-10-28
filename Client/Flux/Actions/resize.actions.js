var ResizeDispatcher = require('../Dispatchers/resize.dispatcher.js');

function setWindowSize(windowSize) {
    ResizeDispatcher.handleViewAction(windowSize); 
}

exports.setWindowSize = setWindowSize;
