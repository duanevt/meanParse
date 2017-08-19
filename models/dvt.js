var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var User = require('./user');

var schema = new Schema({
    fred: {type: String },
    conquered: {type: String},
    numComments: {type: Number},
    cc: {type: Number}
});

// schema.post('remove', function (message) {
//     User.findById(message.user, function (err, user) {
//         user.messages.pull(message);
//         user.save();
//     });
// });

module.exports = mongoose.model('Post', schema, 'Post');
