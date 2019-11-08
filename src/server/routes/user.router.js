var express = require("express"),
	router = express.Router(),
	login = require('../controllers/login.controller');

var User = require('../models/user.model');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = "secret";

/*router.post("/login", function(req, cb){
	console.log('full req', req);
	console.log('posting', req.body);

	return login.authenticateUser(req, function(err, res) {
		if(err) return err;
		console.log(res);
	});
});

router.post("/login")
	.post(login);
	
module.exports = router;*/

router.post("/register", (req, res) => {
	User.findOne({ email: req.body.email }).then(user => {
	  if (user) {
		return res.status(400).json({ 
			email: "Email already exists" });
	  } else {
		const newUser = new User({
		  name: req.body.name,
		  email: req.body.email,
		  password: req.body.password
		});
		
		// Hash password before saving in database
		bcrypt.genSalt(10, (err, salt) => {
		  bcrypt.hash(newUser.password, salt, (err, hash) => {
			if (err) throw err;
			newUser.password = hash;
			newUser
			  .save()
			  .then(user => res.json(user))
			  .catch(err => console.log(err));
		  });
		});
	  }
	});
});

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(req.body);
  
  // Find user by email
  User.findOne({ email }).then(user => {
	// Check if user exists
	if (!user) {
	  return res.status(404).json({ emailnotfound: "Email not found" });
	}
	// Check password
	bcrypt.compare(password, user.password).then(isMatch => {
	  if (isMatch) {
		// User matched
		// Create JWT Payload
		const payload = {
		  id: user.id,
		  name: user.name
		};
		
		// Sign token
		jwt.sign(
		  payload,
		  keys,
		  {
			expiresIn: 31556926 // 1 year in seconds
		  },
		  (err, token) => {
			res.json({
			  success: true,
			  token: "Bearer " + token
			});
		  }
		);
	  } else {
		return res
		  .status(400)
		  .json({ passwordincorrect: "Password incorrect" });
	  }
	});
  });
});

module.exports = router;