var config = require('./config'), 
	express = require("express"),
	mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
	passport = require("passport"),
	users = require('../routes/user.router');


module.exports.start = function() {
	const app = express();

	// Heroku tutorial addition:
	const path = require('path');
	const port = process.env.PORT || 5000;

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
		console.log("YOU ARE IN PRODUCTION MODE");
		// set static folder
		app.use(express.static('/build/index.html'));
		
		app.get('*', function(req, res) {
			res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
		});

/*
		app.get('*', (req, res) = > {
			res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
	 	});
*/
	}
	else
	{
		console.log("NOT IN PRODUCTION MODE");
	}
  	
	// Configures router
	app.use("/users", users);



	// HEROKU VERISION: 	
	app.listen(port, () => console.log('server start on port:', port));
/*	  
	// TEMP comment out, may need to put back immediately
  	app.listen(config.port, function() {
    	console.log('Server is listening on port', config.port);
  	});

*/
};






/*
const express = require('express');

const app = express();
const path = require('path');
const port = process.env.PORT || 5000;


//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

//production mode
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  //
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = 'client/build/index.html'));
  })
}


//build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
})

//start server
app.listen(port, (req, res) => {
  console.log( `server listening on port: ${port}`);
})

*/
