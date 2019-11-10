var User = require('../models/user.model.js');

// ---------------------------------------------------------------- //

exports.userExists = function(req, cb) {
	var email = req.body.email;
	console.log("Checking if userExists", email);

	User.exists({email}, function(err, exists) {
		if (err) return cb(err);
		console.log("Result: ", exists);
		return cb(exists);
	});
}

// ---------------------------------------------------------------- //

exports.findUser = function(req, cb) {
	console.log("Looking for user", req.body.email);
	const email = req.body.email;

	User.findOne({email: email}, function(err, found) {
		if (err)
			throw err;
		else
			cb(found);
	});
};

// ---------------------------------------------------------------- //

exports.registerUser = function(req, cb) {
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

exports.createUser = function(req, cb) {
	var usr = new User(req);

	usr.save(function(err) {
		if(err)
			console.log(err);
		else
			console.log('This User was added to the database: ');
			console.log(usr);
	});
	
	cb(usr);
};

// ---------------------------------------------------------------- //

// Updates listing from an already found listing
exports.updateUser = function(req, updates, cb) {
	// paramaters: 
	// req - the User to change (already found from DB)
	// updates - the things to change
	// if changing email, must also change email in Biz Listings
	// updated_at is auto changed
			
	var newUsr = req;
	var nowDate = new Date();
	newUsr.updated_at = nowDate;
	
	if (updates.hasOwnProperty('name'))
		newUsr.name = updates.name;
	if (updates.hasOwnProperty('email'))
		newUsr.email = updates.email;
	if (updates.hasOwnProperty('password'))
		newUsr.password = updates.password;
	
	newUsr.save(function(err) {
		if (err)
			console.log(err);
		else
			console.log('Update success.');
	});

	cb(newUsr);
};

// ---------------------------------------------------------------- //

exports.deleteUser = function(req, cb) {	

	this.findUser(req, function(found) {
		var id = found._id;
		var param = { _id: id };	
		
		User.findByIdAndDelete(param, function (err) {
			if (err)
			{
				throw err;
				console.log(err);
			}
			console.log('This User was deleted:');
			console.log(found);
		});
		
		cb(found);
	});

};

