module.exports = function(app) {
    var index_render = require('../Controllers/index.controller.js');
    var testusrdb = require('../Controllers/index.database.controller.js').testusrdb;
    app.get('/', index_render.render);
    app.get('/testusrdb', testusrdb); 
}
