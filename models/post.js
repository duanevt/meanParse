var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var User = require('./user');

var schema = new Schema({
    fred: {type: String },
    conquered: {type: String},
    numComments: {type: Number},
    cc: {type: Number}
});

module.exports = mongoose.model('Post', schema, 'Post');
