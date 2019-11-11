var config = require('./config'), 
	express = require("express"),
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
	app.use(express.static(path.join('../../client')));

    app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname + '../../client/index.html'));
	});

	/** MongoDB **/
  	mongoose
	  .connect(config.db.uri, { 
		  useNewUrlParser: true,
		  useUnifiedTopology: true})
	  .then(() => console.log("MongoDB successfully connected"))
	  .catch(err => console.log(err));
  
	/** Passport **/
  	app.use(passport.initialize());
  	require('./passport')(passport);

	/** Configures router **/
	app.use("/users", users);
	  
  	app.listen(config.port, function() {
    	console.log('Server is listening on port', config.port);
  	});
};