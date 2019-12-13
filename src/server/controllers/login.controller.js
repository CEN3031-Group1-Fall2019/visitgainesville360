var userFunct = require('../controllers/user.db.controller.js');
var Biz = require('../models/biz.model.js');
var User = require('../models/user.model.js');

exports.updateLogin = function(req, cb) {
	var findThis = {
		email: req.body.oldemail,
	}
	var updates = {
		email: req.body.email,
	}
	var nowDate = new Date();
	updates.updated_at = nowDate;


	userFunct.registerUser(req, function(err, res) {
		if(err) return cb(err);
		return cb(res);
	});
	User.findOneAndDelete(findThis, updates, function(err) {
		if (err) return cb(err);
	});

	Biz.updateMany(findThis, updates, function(err) {
		if (err) return cb(err);
	});

}

/*
exports.registerUser = function(req, cb) {
	console.log("Creating user", req.body.name, req.body.email);

	var newUser = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	});

	newUser.save(function(err, res) {
		if (err) return cb(err);
		console.log("Saved listing: ", newUser);
		return cb(res);
	});
}};

*/

exports.userExists = function(req, cb) {	
	userFunct.userExists(req, function(exists) {
		return cb(exists);
	});
}

exports.createNewUser = function(req, cb) {
	userFunct.registerUser(req, function(err, res) {
		if(err) return cb(err);
		return cb(res);
	});
}

exports.findUsers = function(req, cb) {	
	userFunct.findUser(req, function(found) {
		return cb(found);
	});
}

exports.modify = function(user, update, cb) {	
	userFunct.modifyUser(user, update, function(err) {
		if(err) throw err;
	});
}