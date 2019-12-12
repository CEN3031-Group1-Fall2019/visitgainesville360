'use strict';

var mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Biz = require('../models/biz.model.js'),
    bizFunction = require('../controllers/biz.db.controller.js'),
    config = require('../config/config');

	mongoose.connect(config.db.uri, { useNewUrlParser: true });

// ----------------------------------------------------------------- //

var populateBiz= function() {

	var exampleList = { 
		email: "admin@email.com",
		title: "Admin Listing 1",
		isApproved: true,
		isDenied: false,
		bizemail: "admin1@email.com",
		typetag: "Type Tag1",
		loctag: "Location Tag1",
		address: "1111 Admin Rd",
		phone: "1234567890",
		state: "FL",
		zip: "32601",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	};

	bizFunction.createBizNode(exampleList, function(found) {
		console.log('this was returned to test function: ');
		console.log(found);
	});

	var exampleList = { 
		email: "admin@email.com",
		title: "Admin Listing 2",
		isApproved: true,
		isDenied: false,
		bizemail: "admin2@email.com",
		typetag: "Type Tag2",
		loctag: "Location Tag2",
		address: "2222 Admin Rd",
		phone: "1234567890",
		state: "FL",
		zip: "32601",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	};

	bizFunction.createBizNode(exampleList, function(found) {
		console.log('this was returned to test function: ');
		console.log(found);
	});

	var exampleList = { 
		email: "admin@email.com",
		title: "Admin Listing 3",
		isApproved: true,
		isDenied: false,
		bizemail: "admin3@email.com",
		typetag: "Type Tag3",
		loctag: "Location Tag3",
		address: "3333 Admin Rd",
		phone: "1234567890",
		state: "FL",
		zip: "32601",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	};

	bizFunction.createBizNode(exampleList, function(found) {
		console.log('this was returned to test function: ');
		console.log(found);
	});

	var exampleList = { 
		email: "admin@email.com",
		title: "Admin Listing 4",
		isApproved: true,
		isDenied: false,
		bizemail: "admin4@email.com",
		typetag: "Type Tag4",
		loctag: "Location Tag4",
		address: "4444 Admin Rd",
		phone: "1234567890",
		state: "FL",
		zip: "32601",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	};

	bizFunction.createBizNode(exampleList, function(found) {
		console.log('this was returned to test function: ');
		console.log(found);
	});
};	


// ----------------------------------------------------------------- //



populateBiz();
