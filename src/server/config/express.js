var express = require('express'), 
	mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    config = require('./config');

module.exports.init = function() {
	mongoose
		.connect(config.db.uri, { useNewUrlParser: true })
		.then(() => console.log("MongoDB successfully connected"))
		.catch(err => console.log(err));

  	var app = express();

  	app.use(
		bodyParser.urlencoded({
			extended: false
		})
	);
	
	app.use(bodyParser.json());
  
  	return app;
};  