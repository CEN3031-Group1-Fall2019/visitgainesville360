var userFunct = require('../controllers/user.db.controller.js');

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