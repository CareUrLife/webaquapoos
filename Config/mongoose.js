var mongoose = require('mongoose');
var researchDB_URI = '';


console.log("Connect to Reserch DB ... ");

var db = mongoose.connect(researchDB_URI);

mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + researchDB_URI);
});

mongoose.connection.on('error', function() {
    console.log('Mongoose connect to ' + researchDB_URI + ' emits error ' + err);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected to ' + researchDB_URI);
})

  

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

