var Tag = require('../models/tag.model.js');
var Biz = require('../models/biz.model.js');

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

exports.updateTag = function(req, cb) {	
	var findThis = { 
		email: req.body.email,
		title: req.body.name
	};
	var updates = {
		typetag: req.body.typetag,
		loctag: req.body.loctag
	};
		
	var nowDate = new Date();
	updates.updated_at = nowDate;

	Biz.findOneAndUpdate(findThis, updates, function(err) {
		if (err) return cb(err);
	});
};

// ---------------------------------------------------------------- //

/*
exports.createTag = function(req, cb) {
	console.log("you are in createTag");
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
*/

exports.createTag = function(req, cb) {
	var tagz = new Tag(req.body);
	console.log("creating tag", tagz);

	tagz.save(function(err) {
		if(err) return cb(err);
	});
};


exports.createTag2 = function(req, cb) {	
	var findThis = { 
		email: req.body.email,
		name: req.body.name
	};
	var updates = {
		typetag: req.body.typetag,
		loctag: req.body.loctag
	};
	var nowDate = new Date();
	updates.updated_at = nowDate;

	Tag.findOneAndUpdate(findThis, updates, function(err) {
		if (err) return cb(err);
	});
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

/*
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
*/

// ---------------------------------------------------------------- //

exports.findAll = function(req, cb) {
	Tag.find({}, function(err, listings) {
		if (err) throw err;
		cb(null, listings);
	});
};
