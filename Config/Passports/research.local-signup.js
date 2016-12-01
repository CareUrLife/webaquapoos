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
            email : req.body.email,
            isAdmin : req.body.isAddmin,
            description : req.body.description
        };
        let newResearcher = new ResearcherModel(researcherData);
        newResearcher.save(function(err) {
            if(err) { console.log("err"); return done(err);}
            return done(null);
        });
    });
}
