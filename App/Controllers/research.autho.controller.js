const ResearcherModel = require('mongoose').model('ResearcherInfo');
const FishInfoModel = require('mongoose').model('FishInfo');
const jwt = require('jsonwebtoken');

module.exports = function(config) {
    
    return function(req, res, next) {
        if(!req.headers.authorization) {
            return res.status(401).end();
        }
        let token = req.headers.authorization.split(' ')[1];

        var afterFindResearcher = function(err, researcher) {
            if(err || !researcher) {
                return res.status(401).end();
            }
            var appData = {fishListNames : []};
            let researcherData = {
                usrName : researcher.usrName,
                realName : researcher.realName,
                email : researcher.email,
                isAdmin : researcher.isAdmin,
                description : researcher.description 
            }
            FishInfoModel.find().exec(function(err, docs) {
                if(err) throw err; 
                docs.forEach(function(fish) {
                    appData.fishListNames.push(fish.name);
                    console.log('Ok');
                });
                return res.status(200).send({researcherData, appData}).end(); 
            });
            
        };

        if(token) {
            jwt.verify(token, config.secret, function(err, decoded){
                if(err) {res.status(401).end();}

                let researcherID = decoded.id;

                ResearcherModel.findOne({_id : researcherID}, function(err, researcher) {
                    afterFindResearcher(err,researcher); 
                });
            });
        } 
    };
};
