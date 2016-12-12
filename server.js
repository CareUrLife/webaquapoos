require('./server.babel.js');
var express = require("./Config/express.js");
var config = require("./Config/config.js");
var chokidar = require('chokidar');
require('./Config/mongoose.js');


// Set agent same in both client and server (material ui server render requirement)
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';
// ----
//require("../App/Routes/index.route.js")(app);

const watcher = chokidar.watch('./App');

watcher.on('ready', function() {
    watcher.on('all', function() {
        console.log("Clearing /server/ module cache from server " + require.cache);
        Object.keys(require.cache).forEach(function(id) {
            if (/[\/\\]express[\/\\]/.test(id)) delete require.cache[id];
        });
    });
});

var app = express();

var port = process.env.PORT || 8080;



app.listen(port);

console.log("AquapoOS server is listening at " + port + " port");


