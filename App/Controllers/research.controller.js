const router = require('express').Router();
const config = require('../../Config/config.js');
const authCheckMiddleware = require('../Controllers/research.autho.controller.js')(config);
const passport = require('passport');


router.get('/auth', authCheckMiddleware);

router.post('/signup', function(req, res, next) {
    passport.authenticate('local-signup',  function(err ) {
        if(err) {
            if(err.name === 'MongoError' && err.code === 11000) {
                return res.status(409).json({success : false, message: "This email is already taken"});
            }

            return res.status(400).json({sucess : false, message : "Cannot process login form"});
        }

        res.status(200).json({success : true, message : "Signup Successfully"});
    })(req, res, next);
});

router.post('/login', function(req, res, next) {
    console.log("body parsing", req.body);
    passport.authenticate('local-login',  
        function(err, token, researcherData) {
            if(err) {
                if(err.name === "IncorrectEmailOrPasswordError") {
                     return res.status(404).json({success : false, message : err.message});
                }

                return res.status(400).json({success : false, message : "Cannot process signup form"});
            }
            res.status(200).json({success : true, message : "Login Successfully",token : token, researcherData : researcherData});
        })(req, res, next);
});

module.exports= router;
