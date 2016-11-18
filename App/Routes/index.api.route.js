var jwt = require('jsonwebtoken');

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

    apiRouter.post('/authentication', function(req, res) {
        ResearcherInfoModel.findOne({usrname: req.usrname}, function(err, researcher) {
            if(err) {console.log(err);}
            else {
                console.log(req.body.password);
                if(!researcher) {
                    res.json({success : false, message: 'You must register before being our Researcher'});
                }else{
                    if(req.body.password != researcher.password) {
                        res.json({success : false, message : 'Password is not matched'});
                    }else{
                        var token = jwt.sign(researcher, app.get('superSecret'), {
                            expiresIn : 1440 // expires in 24 hours
                        });

                        res.json({success : true, message : 'Enjoy your research activity', token});
                    }
                }
            }
            
        })
    })

    app.use('/api', apiRouter);
}
