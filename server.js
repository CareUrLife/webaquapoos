process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require("./Config/express.js");
var svConfig = require("./server.config.js");
require('./Config/mongoose.js');


// Set agent same in both client and server (material ui server render requirement)
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';
// ----
var app = express();

app.listen(svConfig.Port);

console.log("AquapoOS server listen " + svConfig.Port + " port");


