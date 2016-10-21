process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require("./Config/express.js");
var svConfig = require("./server.config.js");
var app = express();

app.listen(svConfig.Port);

console.log("AquapoOS server listen " + svConfig.Port + " port");
