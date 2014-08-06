var express      = require('express');
var path         = require('path');
var favicon      = require('static-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var flash        = require('connect-flash');
var session      = require('express-session');
var passport     = require('passport');

var globals      = require('../globals');

module.exports.init = function(app) {

	app.set('views', path.join(globals.dir, 'views'));
	app.set('view engine', 'jade');

	app.use(favicon());
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded());
	app.use(cookieParser());
	app.use(session({ secret: 'ehr' }));
    app.use(passport.initialize());
	app.use(passport.session());
	app.use(flash());

	app.use(express.static(path.join(globals.dir, 'public')));

}