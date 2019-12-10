var Tag = require('../models/tag.model.js');

// ---------------------------------------------------------------- //

exports.findTag = function(req, cb) {
	Tag.findOne(req, function(err, found) {
		console.log("Finding one");
		if (err) throw err;
		console.log("Found: ", found);
		cb(found);
	});
};

// ---------------------------------------------------------------- //

exports.createTag = function(req, cb) {
	var tagz = new Tag(req);

	tagz.save(function(err) {
		if(err)
			console.log(err);
		else
			console.log('This User was added to the database: ');
			console.log(tagz);
	});
	
	cb(tagz);
};

// ---------------------------------------------------------------- //

exports.deleteTag = function(req, cb) {	

	this.findTag(req, function(found) {
//		var id = found[0]._id;
		var id = found._id;
		var param = { _id: id };	
		
		Tag.findByIdAndDelete(param, function (err) {
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

// Updates listing from an already found listing
exports.updateTag = function(req, updates, cb) {
	// req - the found listing to change
	// for changing the listings you cannot change email 
		
	var newTag = req;
	var nowDate = new Date();
	newTag.updated_at = nowDate;
	console.log(updates);
	
	if (updates.hasOwnProperty('typetag'))
		newTag.typetag = updates.typetag;
	if (updates.hasOwnProperty('loctag'))
		newTag.loctag = updates.loctag;
	
	newTag.save(function(err) {
		if (err)
			console.log(err);
		else
			console.log('Update success.');
	});

	cb(newTag);
};

// ---------------------------------------------------------------- //

exports.findAll = function(req, cb) {
	Tag.find({}, function(err, listings) {
		if (err) throw err;
		cb(null, listings);
	});
};
