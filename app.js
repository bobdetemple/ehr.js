var express = require('express');
var globals = require('./globals');
var config  = require('./app_start/config');
var routes  = require('./app_start/routes');
var errors  = require('./app_start/errors');
var auth    = require('./auth/auth');
var install = require('./app_start/install');

var app = express();

globals.dir = __dirname;

config.init(app);

routes.init(app);

errors.init(app);

auth.init();

install.init();

module.exports = app;
