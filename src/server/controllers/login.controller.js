var User = require('../models/user.model.js');

exports.findUser = function(req, cb) {
	console.log("Looking for user", req.body.email);
	const email = req.body.email;

	User.findOne({email: email}, function(err, user) {
		if (err) throw err;
		return cb(user);
	});
}

exports.userExists = function(req, cb) {
	console.log("Checking if userExists");
	var email = req.body.email;

	User.exists({email}, function(err, exists) {
		if (err) throw err;
		console.log("Result: ", userExists);
		return cb(exists);
	});
}

exports.createNewUser = function(req) {
	console.log("Creating user", req.body.name, req.body.email);

	var newUser = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	});

	newUser.save(function(err) {
		if (err) throw err;
		console.log("Saved litsing: ", newUser);
	});
}