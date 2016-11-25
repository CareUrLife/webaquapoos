exports.render = function(req, res) {
    if(req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }else{
        console.log("it is first time you visit AquapoOS");
    }
    
    req.session.lastVisit = new Date();
    /*res.render('index');*/

    
}
