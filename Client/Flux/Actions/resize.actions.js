var ResizeDispatcher = require('../Dispatchers/resize.dispatcher.js');

function setWindowSize(windowSize) {
    ResizeDispatcher.dispatch(windowSize); 
}

module.exports = ResizeDispatcher;
