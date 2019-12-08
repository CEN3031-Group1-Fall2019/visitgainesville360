var mongoose = require('mongoose'), 
    Biz = require('../models/biz.model.js');

/*
exports.userExists = function(req, cb) {
	var email = req.email;
	console.log("Checking if userExists", email);

	User.exists({email}, function(err, exists) {
		if (err) return cb(err);
		console.log("Result: ", exists);
		return cb(exists);
	});
}
*/

// ---------------------------------------------------------------- //

exports.findBiz = function(req, cb) {
	console.log("Entering findBiz");
	Biz.findOne(req, function(err, found) {
		console.log("Finding one");
		if (err) throw err;
		console.log("Found: ", found);
		cb(found);
	});
};

// ---------------------------------------------------------------- //

exports.createBiz = function(req, cb) {
	var newListing = new Biz(req.body);
	console.log("creating biz", newListing);
	newListing.save(function(err) {
		if(err) return cb(err);
	});
};

// ---------------------------------------------------------------- //

exports.deleteBiz = function(req, cb) {	

	this.findListing(req, function(found) {
//		var id = found[0]._id;
		var id = found._id;
		var param = { _id: id };	
		
		Biz.findByIdAndDelete(param, function (err) {
			if (err)
			{
				throw err;
				console.log(err);
			}
			console.log('This listing was deleted:');
			console.log(found);
		});
		
		cb(found);
	});

};

// ---------------------------------------------------------------- //

exports.changeBizEmail = function (req, updates, cb) {
	var newBiz = req;
	var nowDate = new Date();
	newBiz.updated_at = nowDate;
	
	if (updates.hasOwnProperty('email'))
		newBiz.email = updates.email;
	
	newBiz.save(function(err) {
		if (err)
			console.log(err);
		else
			console.log('Update success.');
	});

	cb(newBiz);
};

// ---------------------------------------------------------------- //

// Updates listing from an already found listing
exports.updateBiz = function(req, updates, cb) {
	// req - the found listing to change
	// for changing the listings you cannot change email 
		
	var newBiz = req;
	var nowDate = new Date();
	newBiz.updated_at = nowDate;
	
	if (updates.hasOwnProperty('name'))
		newBiz.name = updates.name;
	if (updates.hasOwnProperty('address'))
		newBiz.address = updates.address;
	if (updates.hasOwnProperty('phone'))
		newBiz.phone = updates.phone;
	if (updates.hasOwnProperty('description'))
		newBiz.description = updates.description;
	
	newBiz.save(function(err) {
		if (err)
			console.log(err);
		else
			console.log('Update success.');
	});

	cb(newBiz);
};

// ---------------------------------------------------------------- //

exports.findAll = function(req, cb) {
	console.log("Entering findAll");
	Biz.find({}, function(err, listings) {
		if (err) throw err;
		console.log("Successfully found all listings. Returning to router.");
		cb(null, listings);
	});
};

