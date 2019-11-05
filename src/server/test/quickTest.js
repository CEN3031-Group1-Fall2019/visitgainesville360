'use strict';

var mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('../models/listings.server.model.js'),
    config = require('../config/config'),
    User = require('../models/user.server.model.js');

	mongoose.connect(config.db.uri, { useNewUrlParser: true });

var newBizYo = function() {
	var exampleList = {
		email: "a@b.com",
		name: "ABC food",
		address: "7 street, city, state, zip, USA",
		description: "A lovely spot. Happy times.",
		phone: 555765847
	};

	var list = new Listing(exampleList);

  list.save(function(err) {
    if(err) {
      console.log(err);
//      res.status(400).send(err);
    } else {
      console.log(list)
    }
  });
};


var newUserYo = function () {

	var exampleUser = {
		name: "username9",
		email: "email@domain.com",
		password: "s3cr3t7"
	};
	
	var user = new User(exampleUser);
	
  user.save(function(err) {
    if(err) {
      console.log(err);
//      res.status(400).send(err);
    } else {
      console.log(user)
    }
  });
	
};

newUserYo();
newBizYo();
