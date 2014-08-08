var passwordHash = require('password-hash');

var db           = require('../data/db');

exports.init = function() {

	var a = db.users.find(function(err, users) {
		if(users.length == 0) createAdminUser();
	});

}

function createAdminUser() {

	var a = new db.user({
		firstName: 'admin',
		lastName: 'user',
		username: 'admin',
		password: passwordHash.generate('pass')
	});

	a.save();

	console.log('admin user created');
}