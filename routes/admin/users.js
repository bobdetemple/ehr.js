var express      = require('express');
var db           = require('../../data/db')
var passwordHash = require('password-hash');

var router = express.Router();

//admin/users
router.get('/users', function(req, res) {

	db.users
	.find()
	.sort('lastName')
	.exec()
	.then(function(users){
		res.render('admin/users', { 
			users: users, 
			message: req.flash('message') 
		});
	});  
});

//admin/users/add
router.get('/users/add', function(req, res) {
	res.render('admin/users/add', { title: 'Express' }); 
});

//admin/users/add
router.post('/users/add', function(req, res) {

	var user = new db.user({
		username: req.body.username,
		password: passwordHash.generate(req.body.password),
		firstName: req.body.firstName,
		lastName: req.body.lastName
	});

	user.save(function(err){
		res.redirect('/admin/users');
	});
});

//admin/users/edit
router.get('/users/edit/:id', function(req, res) {

	db.users
	.findOne({'_id': req.params.id})
	.exec()
	.then(function(user){
		res.render('admin/users/edit', { user: user });
	});
});

//admin/users/edit
router.post('/users/edit', function(req, res) {

	db.users
	.findOne({'_id': req.body._id})
	.exec()
	.then(function(user){
	
		user.firstName = req.body.firstName;
		user.lastName = req.body.lastName;
		user.username = req.body.username;

		if (req.body.password != '') {
			user.password = passwordHash.generate(req.body.password);
		}

		user.save(function(err){
			req.flash('message', 'User ' + user.firstName + ' ' + user.lastName + ' Updated!');
			res.redirect('/admin/users');
		});

	});

});

router.get('/users/delete/:id', function(req, res) {

	db.users
	.findOne({'_id': req.params.id})
	.exec()
	.then(function(user){
		req.flash('message', 'User ' + user.firstName + ' ' + user.lastName + ' Deleted!');
		db.users.remove({ '_id': req.params.id }, function(err){
			res.redirect('/admin/users');
		});
	});	
});


module.exports = router;