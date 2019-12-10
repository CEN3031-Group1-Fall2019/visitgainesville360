'use strict';

var mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Biz = require('../models/biz.model.js'),
    User = require('../models/user.model.js'),
    bizFunction = require('../controllers/biz.db.controller.js'),
    userFunction = require('../controllers/user.db.controller.js'),
    Tag = require('../models/tag.model.js'),
    tagFunction = require('../controllers/tag.db.controller.js'),
    config = require('../config/config');

	mongoose.connect(config.db.uri, { useNewUrlParser: true });

var createAdmin = function() {
	var newAdmin = {
		email: "admin@email.com",
		name: "Admin 01",
		password: "Admin123",
		isAdmin: true
	};

	userFunction.createUser(newAdmin, function(found) {
		console.log('this was returned to test function: ');
		console.log(found);
	});
}


createAdmin();