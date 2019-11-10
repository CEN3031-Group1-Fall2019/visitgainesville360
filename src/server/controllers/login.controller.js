var User = require('../models/user.model.js'),
	userFunct = require('../controllers/user.db.controller.js');

exports.findUser = function(req, cb) {		
	userFunct.findUser(req, function(found) {
		return cb(found);
	});
}

exports.userExists = function(req, cb) {	
	userFunct.userExists(req, function(exists) {
		return cb(exists);
	});
}

exports.createNewUser = function(req, cb) {
	userFunct.registerUser(req, function(err) {
		return cb(err);
	});
}

/*

exports.createNewUser = function(req, cb) {
	console.log("Creating user", req.body.name, req.body.email);

	var newUser = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	});

	newUser.save(function(err) {
		if (err) return cb(err);
		console.log("Saved litsing: ", newUser);
		return cb(err);
	});
}

exports.findUser = function(req, cb) {
	console.log("Looking for user", req.body.email);
	const email = req.body.email;

	User.findOne({email: email}, function(err, user) {
		if (err) throw err;
		return cb(user);
	});
}

exports.userExists = function(req, cb) {
	var email = req.body.email;
	console.log("Checking if userExists", email);

	User.exists({email}, function(err, exists) {
		if (err) return cb(err);
		console.log("Result: ", exists);
		return cb(exists);
	});
}

*/
