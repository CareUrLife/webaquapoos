var router = require('express').Router();
var authCheckMiddleware = require('../Controllers/research.autho.controller.js');
router.get('/', function(req, res, next) {
     res.status(200).render('research');
});

router.get('/auth', authCheckMiddleware);

router.post('/signup', function(req, res, next) {
    passport.authenticate('local-signup',  function(err) {
        if(err) {
            if(err.name === 'MongoError' && err.code === 11000) {
                return res.status(409).json({success : false, message: "This email is already taken"});
            }

            return res.status(400).json({sucess : false, message : "Cannot process login form"});
        }

        res.status(200).json({success : true, message : "Signup Successfully"});
    });
});

router.post('/signup', function(req, res, next) {
    passport.authenticate('local-signup', {succesRedirect : '/'}, 
        function(err) {
            if(err) {
                if(err.name === "IncorrectEmailOrPasswordError") {
                     return res.status(404).json(success : false, message : err.message);
                }

                return res.status(400).json(success : false, message : "Cannot process signup form");
            }
            res.status(200).json({success : true, message : "Login Successfully"});
        });
});

exports.researchRouter = router;
