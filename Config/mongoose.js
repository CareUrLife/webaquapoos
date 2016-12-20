
var ResearcherInfoSchema = require('../App/Models/research.model.userAppData.js').ResearcherInfoSchema;

var FishInfoSchema = require('../App/Models/research.model.knowledgeData.js').FishInfoSchema;


var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var researchDB_URI = require('../Config/config.js').db;

console.log("Connect to Research DB ... ");

var db = mongoose.connect(researchDB_URI);

mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + researchDB_URI);
});

mongoose.connection.on('error', function(err) {
    console.log('Mongoose connect to ' + researchDB_URI + ' emits error ' + err);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected to ' + researchDB_URI);
})

/* ------------------ get Model Documents ------------------- */

var ResearcherInfoModel = mongoose.model('ResearcherInfo', ResearcherInfoSchema);
  
var FishInfoModel = mongoose.model('FishInfo', FishInfoSchema);
/*-----------------------------------------------------*/

var gracefulShutdown = function(msg, callback) {
    mongoose.connection.close(function() {
        console.log("Mongoose disconnected through : " + msg);
        callback();
    })
};


process.once('SIGUSR2', function() {
    gracefulShutdown('nodemon restart', function(){
        process.kill(process.pid, 'SIGUSR2');
    });
});

process.once('SIGINT', function() {
    gracefulShutdown('app termination', function() {
        process.exit(0);
    });
});


// Using data model to create requirement schema
