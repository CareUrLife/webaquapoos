const ResearcherModel = require('mongoose').model('ResearcherInfo');
const FishInfoModel = require('mongoose').model('FishInfo');
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

                let token = jwt.sign({id : researcher._id}, config.secret);
                var appData = {fishListNames : []};
                let researcherData = {
                    usrName : researcher.usrName,
                    realName : researcher.realName,
                    email : researcher.email,
                    isAdmin : researcher.isAdmin,
                    description : researcher.description
                };
                FishInfoModel.find().exec(function(err, docs) {
                    if(err) return done(err); 
                    docs.forEach(function(fish) {
                        appData.fishListNames.push(fish.name);
                    })
                    return done(null,token, researcherData, appData);
                })
                

            });
        });
    }
    );
}
