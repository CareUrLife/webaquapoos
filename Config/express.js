var config = require('./config'),
    express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    morgan = require('morgan'),
    jwt = require('jsonwebtoken');


module.exports = function() {
    var app = express();

    if(process.env.NODE_ENV === "production") {
    
    }else if(process.env.NODE_ENV === "development"){
           
    } 

    app.set('superSecret', config.secret); // set secret variable

    //Body Parser Configuration
    app.use(bodyParser.urlencoded({
       extended : true 
    }));

    app.use(bodyParser.json());

    // Use morgan to log all requests to console
    app.use(morgan('dev'));

    // Express Session Configuration
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret,
        cookie: {secure : config.sessionSecure}
        //store: new MongoStore({mongooseConnection : mongoose.connection})
    }));

    // Static Assets
    app.set("views", './App/Views');
    app.set("view engine", 'ejs');
    app.use(express.static('./Client/Assets'));

    // Router
    require("../App/Routes/index.route.js")(app);

    return app;
}
