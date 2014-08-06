var express  = require('express');
var passport = require('passport');

var router   = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index/index', { title: 'Express' });
});

router.get('/login', function(req, res) {
  res.render('index/login', { 
  	title: 'Express', 
  	message: req.flash('error') 
  });
});

router.post('/login', passport.authenticate('local', {
	successRedirect: '/home',
	failureRedirect: '/login',
	failureFlash: true
}));


module.exports = router;
