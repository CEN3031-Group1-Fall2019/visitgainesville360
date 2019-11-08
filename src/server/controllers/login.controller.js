var User = require('../models/user.model.js'),
	Validator = require('validator'),
	bcrypt = require('bcrypt'),
	jwt = require('jsonwebtoken');

const MAX_ATTEMPTS = 10,
	  LOCK_TIME = 60 * 60 * 1000;

var reasons = {
	NOT_FOUND: 0,
	PASSWORD_INCORRECT: 1,
	MAX_ATTEMPTS: 2,
	EMAIL_EMPTY: 3,
	PASSWORD_EMPTY: 4,
	EMAIL_FAILED: 5
};

function validateInput(body) {
	console.log("validating");
	if(Validator.isEmpty(body.email)) return reasons.EMAIL_EMPTY;
	if(!Validator.isEmail(body.email)) return reasons.PASSWORD_INCORRECT;
	if(Validator.isEmpty(body.password)) return reasons.PASSWORD_EMPTY;
}

function isLocked(user) {
	console.log('checking locked');
    return !!(user.lockUntil && user.lockUntil > Date.now());
}

function increaseLoginAttempts(user) {
	if (user.lockUntil && user.lockUntil < Date.now()) {
        return user.update({
            $set: { loginAttempts: 1 },
            $unset: { lockUntil: 1 }
        }, cb);
	}
	
	var updates = { $inc: { loginAttempts: 1 } };
	
    if (user.loginAttempts + 1 >= MAX_ATTEMPTS && !user.isLocked) {
        updates.$set = { lockUntil: Date.now() + LOCK_TIME };
	}
	
    user.update(updates, cb);
}

function completeSuccessfulMatch(user) {
	const payload = {
		id: user.id,
		name: user.name
	  };
	  const secret = "secret";
	  // Sign token
	  jwt.sign(
		payload,
		secret,
		{
		  expiresIn: 31556926 // 1 year in seconds
		},
		(err, token) => {
		  res.json({
			success: true,
			token: "Bearer " + token
		  });
		}
	);

	var updates = {
		$set: { loginAttempts: 0 },
		$unset: { lockUntil: 1 }
	};
	return user.update(updates, function(err) {
		if (err) return err;
		return updates;
	});
}

exports.findUser = function(req, cb) {
	console.log("Finding user", req.body);
	var email = req.body.email;
	console.log("email", email);
	User.findOne({email}, function(err, user) {
		if(err) return cb(err);
		if(!user) return reasons.NOT_FOUND;
		return user;
	});
}
	
exports.authenticateUser = function(req, cb) {
	console.log('authenticating', req);


	var email = req.body.email;
	var possiblePassword= req.body.password;

	/*if (error = validateInput(loginData) !== 'undefined') {
		return cb(null, null, error);
	}*/

	User.findOne({ email }, function(err, user) {
		if (err) return cb(err);
		if (!user) return cb(null, null, reasons.NOT_FOUND);

		if (isLocked(user)) {
			return cb(null, null, reasons.MAX_ATTEMPTS);
		}

		bcrypt.compare(possiblePassword, user.password, function(err, isMatch) {
			if (err) return cb(err);
			if (isMatch) {
				return completeSuccessfulMatch(user);
			} else {
				increaseLoginAttempts(user);
				return cb(null, null, reasons.PASSWORD_INCORRECT);
			}
		});
	})
};