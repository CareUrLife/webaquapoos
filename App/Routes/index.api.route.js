

module.exports =  function(app) {
    var express = require('express');

    var apiRouter = express.Router();

    var ResearcherInfoModel = require('mongoose').model('ResearcherInfo');
    apiRouter.get('/', function(req, res) {
        res.json({message : 'You are in api area'});
    });

    apiRouter.get('/researchers', function(req, res) {
        ResearcherInfoModel.find({}, function(err, researchers) {
            res.json(researchers);
        }) 
    });

    app.use('/api', apiRouter);
}
