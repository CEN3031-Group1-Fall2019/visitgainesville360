var Biz = require('../models/biz.model.js');

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

	/*cloudinary.v2.uploader.upload(req.file.path, function(err, result) {
		if (err) throw err;
		req.body.image = result.secure_url; 
		req.body.imageId = result.public_id; 
	});*/

	newListing.save(function(err) {
		if(err) return cb(err);
	});
};


exports.createBizNode = function(req, cb) {
	var newListing = new Biz(req);
	console.log("creating biz", newListing);
	newListing.save(function(err) {
		if(err) console.log(err);
	});
};

// ---------------------------------------------------------------- //


// !!!!!!!!!!!!! 
exports.deleteBiz = function(req, cb) {	
	var findThis = { 
		email: req.body.email,
		title: req.body.name
	};

	console.log("deleting this: " + req.body);
	Biz.findOneAndDelete(findThis, function (err) {
		if (err) return cb(err);
	});
/*
	this.findListing(req, function(found) {
//		var id = found[0]._id;
		var id = found._id;
		var param = { _id: id };	
		
		Biz.findByIdAndDelete(param, function (err) {
			if (err) return cb(err);
		});
	});
*/
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
	Biz.find(req, function(err, listings) {
		if (err) throw err;
		return cb(null, listings);
	});
};

// ---------------------------------------------------------------- //

/**
 * Allows the admin to update a listing in Biz
 * 
 * req will host the id of the listing to be updated
 * {_id: 123}
 * 
 * updates will host the updates wanted to be made on the listing
 * {item1: update_to_this, item2: update_to_that}
 */

exports.adminUpdate = function(req, updates, cb) {
	console.log("Attempting to update: ", req, " with: ", updates);
	Biz.findOneAndUpdate(req, updates,{upsert: true}, function(err) {
		if (err) return cb(err);
		console.log("Successfully updated: ", req, "with", updates);
	});
}

// ---------------------------------------------------------------- //

/**
 * Counts all items in Biz that meet certain criteria
 * 
 * The criteria will be defined in req with the format
 * {item1: criteria1, item2: criteria2, ...}
 */

exports.countAll = function(req, cb) {
	console.log("Attempting to count all items with criteria", req);
	Biz.find(req, function(err, res) {
		if (err) {
			console.log("Error while counting req", req, err);
			throw err;
		}
		return cb(res.length);
	})
}