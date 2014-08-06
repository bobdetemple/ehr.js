var index = require('../routes/index');
var home  = require('../routes/home');
var admin  = require('../routes/admin');
var auth  = require('../auth/auth');

module.exports.init = function(app) {

	app.use('/', index);

	app.use('/home', auth.loggedIn); 
	app.use('/home', home);
	app.use('/admin', auth.loggedIn); 
	app.use('/admin', admin);

}