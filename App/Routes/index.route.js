module.exports = function(app) {
    var index_render = require('../Controllers/index.controller.js');
    app.get('/', index_render.render);
}
