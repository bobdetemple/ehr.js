var mongoose   = require('mongoose');

var userSchema = require('../data/models/user');

mongoose.connect('mongodb://localhost/ehr');

var user = mongoose.model('user', userSchema);





exports.user = user;
exports.users = user;