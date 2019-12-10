var express = require("express"),
	mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
	passport = require("passport"),
	users = require('../routes/user.router');
<<<<<<< HEAD
	listings = require('../routes/listing.router');
=======
	listings = require('../routes/listing.router'),
	admin = require('../routes/admin.router'),
	cloud = require('./cloud');
>>>>>>> d42cf3f7e16d23594dbff93c15dd964523fa84e6

module.exports.start = function() {
	const app = express();

	/** BodyParser for requests **/
	app.use(bodyParser.urlencoded({extended: false}));
	app.use(bodyParser.json());

	/** MongoDB **/
  	mongoose
	  .connect(process.env.MONGOLAB_URI || 'mongodb://127.0.0.1:27017/test', { 
		  useNewUrlParser: true,
		  useUnifiedTopology: true})
	  .then(() => console.log("MongoDB successfully connected"))
	  .catch(err => console.log(err));
  
	/** Passport **/
  	app.use(passport.initialize());
	require('./passport')(passport);
	  
	// Configures Cloudinary
	cloud.start();

	/** Configures router **/
	app.use("/users", users);
	app.use("/listings", listings);
<<<<<<< HEAD

	/** Heroku **/
	var path = require("path");
	app.use(express.static(path.join(__dirname + './../../../build')));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname + '/../../../public/index.html'));
	});
=======
	app.use("/admin", admin);
>>>>>>> d42cf3f7e16d23594dbff93c15dd964523fa84e6
	  
	var port = process.env.PORT || 5000;
  	app.listen(port, function() {
    	console.log('Server is listening on port', );
  	});
};