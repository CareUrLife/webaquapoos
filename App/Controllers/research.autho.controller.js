const ResearcherModel = require('mongoose').mode('ResearchInfo');
const jwt = require('jsonwebtoken');

module.exports = function(config) {
    
    return function(req, res, next) {
        if(!req.headers.authorization) {
            return res.status(401).end();
        }
        let token = req.headers.authorization.split(' ')[1];

        if(token) {
            jwt.verify(token, config.superSecret, function(err, decoded){
                if(err) {return res.status(401).end();}

                let researcherID = decoded.id;
                
                ResearcherModel.findOne({_id : researcherID}, function(err, researcher) {
                    if(err || !researcher) {
                        res.status(401).end();
                    }

                    return next(); 
                    // next middleware, in our case, this middleware is router
                });
            });
        } 
    };
};
