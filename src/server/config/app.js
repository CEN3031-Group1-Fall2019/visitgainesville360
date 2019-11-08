var config = require('./config'), 
	express = require("express"),
	mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
	passport = require("passport"),
	users = require('../routes/user.router');

module.exports.start = function() {
	const app = express();
	app.use(
	  bodyParser.urlencoded({
		  extended: true
	  })
  );

  app.use(bodyParser.json());

  mongoose
	  .connect(config.db.uri, { 
		  useNewUrlParser: true,
		  useUnifiedTopology: true })
	  .then(() => console.log("MongoDB successfully connected"))
	  .catch(err => console.log(err));
  
  app.use(passport.initialize());
  require('./passport')(passport);

  app.use("/users", users);
  	app.listen(config.port, function() {
    	console.log('App.js file is listening on port', config.port);
  	});
};