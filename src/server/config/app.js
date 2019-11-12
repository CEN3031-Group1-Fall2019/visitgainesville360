var express = require("express"),
	mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
	passport = require("passport"),
	users = require('../routes/user.router');

module.exports.start = function() {
	const app = express();

	/** BodyParser for requests **/
	app.use(bodyParser.urlencoded({extended: false}));
	app.use(bodyParser.json());
	
	/** Heroku **/
	app.use(express.static('../../client'));

	var path = require("path");
    app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname + '../../client/index.html'));
	});

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

	/** Configures router **/
	app.use("/users", users);
	  
	var port = process.env.PORT || 80;
  	app.listen(port, function() {
    	console.log('Server is listening on port', );
  	});
};