var config = require('./config'),
    express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    morgan = require('morgan'),
    jwt = require('jsonwebtoken'),
    passport = require('passport'),
    webpackDevHelper = require('../webpack.dev-helper.js'),
    chokidar = require('chokidar'),
    path = require('path');


module.exports = function() {
    var app = express();

    if(process.env.NODE_ENV === "production") {
        console.log("PRODUCTION ENVIRONMENT");
        var compression = require('compression');
        app.use(compression());
    }else if(process.env.NODE_ENV === "development"){
        console.log("DEVELOPMENT ENVIRONMENT"); 
        webpackDevHelper.useWebpackMiddleware(app);
        require("nodejs-dashboard");
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
    app.use(express.static(path.join(__dirname, '..', 'Client/Assets')));

    // Router
    require("../App/Routes/index.route.js")(app);

    const watcher = chokidar.watch('./express.js');

    watcher.on('ready', function() {
        watcher.on('all', function() {
            console.log("Clearing /server/ module cache from server " + require.cache);
            Object.keys(require.cache).forEach(function(id) {
                if (/[\/\\]express[\/\\]/.test(id)) delete require.cache[id];
            });
        });
    });
    return app;
}
