const router = require('express').Router();
const config = require('../../Config/config.js');
const authCheckMiddleware = require('../Controllers/research.autho.controller.js')(config);
const passport = require('passport');


router.post('/auth', authCheckMiddleware);

router.post('/signup', function(req, res, next) {
    passport.authenticate('local-signup',  function(err ) {
        if(err) {
            if(err.name === 'MongoError' && err.code === 11000) {
                return res.status(409).json({success : false, message: {main : "This email is already taken"}});
            }

            return res.status(400).json({sucess : false, message : {main : "Cannot process login form"}});
        }

        res.status(200).json({success : true, message : {main : "Signup Successfully"}});
    })(req, res, next);
});

router.post('/login', function(req, res, next) {

    passport.authenticate('local-login',  
        function(err, token, researcherData, appData) {
            if(err) {
                if(err.name === "IncorrectEmailOrPasswordError") {
                    return res.status(406).send({success : false, message : {main: err.message}}).end();
                }
                return res.status(400).json({success : false, message : {main : "Cannot process signup form"}}).end();
            }
            return res.status(200).json({success : true, message : {main : "Login Successfully"},token : token, researcherData, appData}).end();
        })(req, res, next);
});

module.exports = router;
