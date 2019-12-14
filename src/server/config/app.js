var express = require("express"),
	mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
	passport = require("passport"),
	users = require('../routes/user.router');
	listings = require('../routes/listing.router'),
	admin = require('../routes/admin.router');

module.exports.start = function() {
	const app = express();

	app.use(bodyParser.urlencoded({extended: false}));
  	app.use(bodyParser.json());

  	mongoose
	  .connect(process.env.MONGOLAB_URI || 'mongodb://127.0.0.1:27017/test', { 
		  useNewUrlParser: true,
		  useUnifiedTopology: true})
	  .then(() => console.log("MongoDB successfully connected"))
	  .catch(err => console.log(err));
  
  	app.use(passport.initialize());
	require('./passport')(passport);

	// Configures router
	app.use("/users", users);
	app.use("/listings", listings);
	app.use("/admin", admin);
	  
	/** Heroku **/
	var path = require("path");
	app.use(express.static(path.join(__dirname + './../../../build')));

	app.get('/', (req, res) => {
		res.sendFile(path.resolve(__dirname + '/../../../public/index.html'));
	});
	  
	var port = process.env.PORT || 5000;
  	app.listen(port, function() {
    	console.log('Server is listening on port', );
  	});
};