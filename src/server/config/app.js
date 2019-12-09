var config = require('./config'), 
	express = require("express"),
	mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
	passport = require("passport"),
	users = require('../routes/user.router');
	listings = require('../routes/listing.router'),
	cloud = require('./cloud');

module.exports.start = function() {
	const app = express();

	app.use(bodyParser.urlencoded({extended: false}));
  	app.use(bodyParser.json());

  	mongoose
	  .connect(config.db.uri, { 
		  useNewUrlParser: true,
		  useUnifiedTopology: true})
	  .then(() => console.log("MongoDB successfully connected"))
	  .catch(err => console.log(err));
  
  	app.use(passport.initialize());
	require('./passport')(passport);
	  
	// Configures Cloudinary
	cloud.start();

	// Configures router
	app.use("/users", users);
	app.use("/listings", listings);
	  
  	app.listen(config.port, function() {
    	console.log('Server is listening on port', config.port);
  	});
};