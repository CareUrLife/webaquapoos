const researchRouter = require('../Controllers/research.controller.js');

module.exports = function(app) {
    app.use('/research', researchRouter);
}
