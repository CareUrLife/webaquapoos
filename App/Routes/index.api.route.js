var jwt = require('jsonwebtoken');

module.exports =  function(app) {
    var express = require('express');

    var authRouter = express.Router();

    var ResearcherInfoModel = require('mongoose').model('ResearcherInfo');
    

    authRouter.post('/authentication', function(req, res) {
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

    /*This appears to be a variable naming convention in Node.js control-flow code, where a reference to the next
     function to execute is given to a callback for it to kick-off when it's done.*/

    apiRouter.use(function(req, res, next) {
        var token = req.body.token || req.query.token || req.headers['x-access-token'];

        // decode token

        if(token) {
            jwt.verify(token, app.get('superSecret'), function(err, decoded) {
                if(err) {
                    return res.json({success : false, message: 'Failed to authenticate'});
                }else{
                    req.decoded = decoded;
                    next();
                }
            });
        }else{
            // if there is no token
            // return an error

            return res.status(403).send({
                success: false,
                message: 'No token provided'
            });
        }
    });
    // If user cannot pass above function, user also cannot get to this code area
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
