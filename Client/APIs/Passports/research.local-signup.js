const ResearcherModel = require('mongoose').model('ResearcherInfo');
const passportLocalStrategy = require('passport-local').Strategy;

module.exports = function(config) {

    return new passportLocalStrategy({
        usernameField: 'usrName',
        passwordField: 'password',
        session: false,
        passReqToCallback: true
    }, function(req,usrName , password, done) {
        let researcherData = {
            usrName: usrName,
            password: password,
            realName: req.body.realName,
            isAdmin : req.body.isAdmin,
            email : req.body.email
        };
        let newResearcher = new ResearcherModel(researcherData);
        newResearcher.save(function(err) {
            if(err) {return done(err);}

            return done(null);
        });
    });
}
