'use strict';

var mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Tag = require('../models/tag.model.js'),
    tagFunction = require('../controllers/tag.db.controller.js'),
    config = require('../config/config');

	mongoose.connect(config.db.uri, { useNewUrlParser: true });


var populateTag = function() {
	var exampleTag = {
		email: "biz1@domain.com",
		name: "Biz1 Name",
		typetag: "Restaurant",
		loctag: "Downtown"
	};

	tagFunction.createTag(exampleTag, function(found) {
		console.log('this was returned to test function: ');
		console.log(found);
	});

	var exampleTag = {
		email: "biz2@domain.com",
		name: "Biz2 Name",
		typetag: "Store",
		loctag: "Butler Plaza"
	};

	tagFunction.createTag(exampleTag, function(found) {
		console.log('this was returned to test function: ');
		console.log(found);
	});

	var exampleTag = {
		email: "biz3@domain.com",
		name: "Biz3 Name",
		typetag: "Bank",
		loctag: "Southwest"
	};

	tagFunction.createTag(exampleTag, function(found) {
		console.log('this was returned to test function: ');
		console.log(found);
	});

	var exampleTag = {
		email: "bizDELETE@domain.com",
		name: "Biz DELETE",
		typetag: "delete type",
		loctag: "delete loc"
	};

	tagFunction.createTag(exampleTag, function(found) {
		console.log('this was returned to test function: ');
		console.log(found);
	});

	var exampleTag = {
		email: "bizUPDATE@domain.com",
		name: "Biz UPDATE",
		typetag: "old type tag",
		loctag: "old loc tag"
	};

	tagFunction.createTag(exampleTag, function(found) {
		console.log('this was returned to test function: ');
		console.log(found);
	});
};	

var findBizTag = function() {
	var findEmail = { email: "biz1@domain.com" };
	tagFunction.findTag(findEmail, function(found) {
		console.log(found);
	});
};

var deleteTagzo = function() {
	var findEmail = { email: 'bizDELETE@domain.com' };
	tagFunction.deleteTag(findEmail, function(found) {
		console.log('In original test function: ');
		console.log(found);
	});
}

var updateTagza = function() {
	var findEmail = { email: "bizUPDATE@domain.com" };
	var updateProp = { 
		typetag: "UPDATED type tag",
		loctag: "UPDATED loc tag" 
	};

	tagFunction.findTag(findEmail, function(found) {
		tagFunction.updateTag(found, updateProp, function(result) {
			console.log('The business tag was updated to: ');
			console.log(result);
		});		
	});
}


//populateTag();
//findBizTag();
//deleteTagzo();
updateTagza();
