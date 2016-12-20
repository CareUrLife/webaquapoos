var mongoose = require('mongoose');

var FishInfoSchema = new mongoose.Schema({
    name : String,
    description : String,
    reference : Object,
    specificInfo : Object
});

FishInfoSchema.index({fishName : 1}, {unique: true});

exports.FishInfoSchema = FishInfoSchema;
