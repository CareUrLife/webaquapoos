const ResearcherModel = require('mongoose').model('ResearcherInfo');
const passportLocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
module.exports = function(config) {
    return new passportLocalStrategy({
        usernameField: 'usrName',
        passwordField: 'password',
        passReqToCallback: true,
        session : false
    }, function(req, usrName, password, done) {
        ResearcherModel.findOne({usrName: usrName}, function(err, researcher) {
            if(err) {
                console.log(err);
                return done(err);
            }

            if(!researcher) {
                let error = new Error("Incorrect email or password");
                error.name = "IncorrectEmailOrPasswordError";
                return done(error);
            }

            researcher.comparePassword(password, function(err, isMatch) {
                if(err) {
                    console.log(err);
                    return done(err);
                }

                if(!isMatch) {
                    let error = new Error("Incorrect email or password");
                    error.name = "IncorrectEmailOrPasswordError";
                    return done(error);
                }

                let payload = {
                    id : researcher._id
                };
                
                let token = jwt.sign(payload, config.secret);

                let researcherData = {
                    usrName : researcher.usrName
                };

                return done(null, token, researcherData);
            });
        });
    }
    );
}
