var config = require('./config'), 
	express = require("express"),
	mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
	passport = require("passport"),
	users = require('../routes/user.router');



// Heroku tutorial addition:
const path = require('path');



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
  	



  	// Added for Heroku:
	// Server static assets if in production
	if(process.env.NODE_ENV === 'production') {
		// set static folder
		app.use(express.static('build'));
		
		app.get('*', function(req, res) {
			res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
		});

/*
		app.get('*', (req, res) = > {
			res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
	 	});
*/
	}
  	
	// Configures router
	app.use("/users", users);



	// HEROKU VERISION: 	
	const port = process.env.PORT || 5000;
	app.listen(port, () => console.log('server start on port:', port));
/*	  
	// TEMP comment out, may need to put back immediately
  	app.listen(config.port, function() {
    	console.log('Server is listening on port', config.port);
  	});

*/
  	



};