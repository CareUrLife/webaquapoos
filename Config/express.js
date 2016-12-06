var config = require('./config'),
    express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    morgan = require('morgan'),
    jwt = require('jsonwebtoken'),
    passport = require('passport'),
    webpackDevHelper = require('../webpack.dev-helper.js');


module.exports = function() {
    var app = express();

    if(process.env.NODE_ENV === "production") {
        console.log("PRODUCTION ENVIRONMENT");
        var compression = require('compression');
        app.use(compression());
        require("nodejs-dashboard");
    }else if(process.env.NODE_ENV === "development"){
        console.log("DEVELOPMENT ENVIRONMENT"); 
        webpackDevHelper.useWebpackMiddleware(app);
    } 

    //Body Parser Configuration
    
    app.use(bodyParser.urlencoded({
       extended : false 
    }));

    app.use(bodyParser.json());

    // Passport Configuration
    app.use(passport.initialize());

    require('./Passports/research.passport.index.js')(config);

    const authCheckMiddleware = require('../App/Controllers/research.autho.controller.js')(config);

    require("../App/Routes/research.route.js")(app);
    app.set('superSecret', config.secret); // set secret variable

    

    // Use morgan to log all requests to console
    app.use(morgan('dev'));

    // Express Session Configuration
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.secret,
        cookie: {secure : config.sessionSecure}
        //store: new MongoStore({mongooseConnection : mongoose.connection})
    }));

    // Static Assets
    app.set("views", './App/Views');
    app.set("view engine", 'ejs');
    app.use( express.static('/home/p77u4n/Documents/CodeRespository/Project/CareUrLife/AquapoOs/Client/Assets'));

    // Router
    require("../App/Routes/index.route.js")(app);

    return app;
}
