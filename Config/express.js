var config = require('./config'),
    express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session');


module.exports = function() {
    var app = express();

    if(process.env.NODE_ENV === "production") {
    
    }else if(process.env.NODE_ENV === "development"){
         
    } 

    app.use(bodyParser.urlencoded({
       extended : true 
    }));

    app.use(bodyParser.json());

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret,
        cookie: {secure : config.sessionSecure}
        //store: new MongoStore({mongooseConnection : mongoose.connection})
    }));

    app.set("views", './App/Views');
    app.set("view engine", 'ejs');
    require("../App/Routes/index.route.js")(app);
    app.use(express.static('./Client/Assets'));

    return app;
}
