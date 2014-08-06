var passport      = require('passport')
var LocalStrategy = require('passport-local').Strategy;
var passwordHash  = require('password-hash');
var db            = require('../data/db');

module.exports.init = function() {

	passport.use(new LocalStrategy(function(username, password, done) {
		
		db.user.findOne({ username: username }, function(err, user) {

			if (err) { return done(err); }
			
			if (!user) { return done(null, false, { message: 'Login Failed' }); }

			if (!passwordHash.verify(password, user.password)) { return done(null, false, { message: 'Login Failed' }); }

			return done(null, user);

		});

	}));

	passport.serializeUser(function(user, done) {
	  done(null, user);
	});

	passport.deserializeUser(function(user, done) {
	  done(null, user);
	});

}

module.exports.loggedIn = function(req, res, next) {
	if (req.user) { next(); } else { res.redirect('/login'); }
}