var ResearcherInfoModel = require('mongoose').model('ResearcherInfo');

exports.testusrdb = function(req, res) {
    var Bang = new ResearcherInfoModel({
            usrName : "bangthao",
            realName : "Bang dep trai",
            email : "ducbangdhbkk56@gmail.com",
            password : "bangdeptrai",
            isAdmin : true
    });

    Bang.save(function(err) {
        if(err) {
            console.log(err);
        }
        console.log("testusrdb result : goood, successfully add Bang researcher to DB");
        res.json({success : true});
    })
}
