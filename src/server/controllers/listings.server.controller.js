var mongoose = require('mongoose'), 
    Listing = require('../models/listings.server.model.js');

// ---------------------------------------------------------------- //

exports.findListing = function(req, cb) {
	Listing.findOne(req, function(err, found) {
		if (err)
			throw err;
		else
			cb(found);
	});
};

// ---------------------------------------------------------------- //

exports.createListing = function(req, cb) {
	var list = new Listing(req);

	list.save(function(err) {
		if(err)
			console.log(err);
		else
			console.log('This listing was added to the database: ');
			console.log(list);
	});
	
	cb(list);
};

// ---------------------------------------------------------------- //

exports.deleteListing = function(req, cb) {	

	this.findListing(req, function(found) {
//		var id = found[0]._id;
		var id = found._id;
		var param = { _id: id };	
		
		Listing.findByIdAndDelete(param, function (err) {
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

exports.changeListingEmail = function (req, updates, cb) {
	var newList = req;
	var nowDate = new Date();
//	newList[0].updated_at = nowDate;
	newList.updated_at = nowDate;
	
	if (updates.hasOwnProperty('email'))
		newList.email = updates.email;
	
	newList.save(function(err) {
		if (err)
			console.log(err);
		else
			console.log('Update success.');
	});

	cb(newList);
};

// ---------------------------------------------------------------- //

// Updates listing from an already found listing
exports.updateListing = function(req, updates, cb) {
	// paramaters: 
	// req - the listing to change
	// updates - the things to change
	// for changing the listings you cannot change email 
	// name, address, phone, description, can be changed
	// updated_at is auto changed
		
	var newList = req;
	var nowDate = new Date();
//	newList[0].updated_at = nowDate;
	newList.updated_at = nowDate;
	
	if (updates.hasOwnProperty('name'))
		newList.name = updates.name;
	if (updates.hasOwnProperty('address'))
		newList.address = updates.address;
	if (updates.hasOwnProperty('phone'))
		newList.phone = updates.phone;
	if (updates.hasOwnProperty('description'))
		newList.description = updates.description;
	
	newList.save(function(err) {
		if (err)
			console.log(err);
		else
			console.log('Update success.');
	});

	cb(newList);
};

// ---------------------------------------------------------------- //

// Probably we will not need this
exports.readListing = function(req) {
	console.log(req.listing);
	return json.req;
};