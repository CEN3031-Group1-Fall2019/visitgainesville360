var express = require("express"),
	bcrypt = require("bcryptjs"),
	jwt = require("jsonwebtoken"),
	router = express.Router(),
	login = require('../controllers/login.controller'),
	config = require('../config/config');

router.post("/register", function(req, res) {
	console.log("Routing to register user");

	login.userExists(req, function(err, userExists) {
		if (err) throw err;

		if (userExists) {
			return res.status(400).json({email: "Email already exists"})
		};

		console.log("User doesn't exist. Adding user to database.");
		login.createNewUser(req, function(err, user) {
			if (err) throw err;
		})
	});
});

router.post("/login", function(req, res) {
	login.findUser(req, function(user) {
		if (!user) return res.status(404).json({emailnotfound: "Email not found"});

		const password = req.body.password;
		bcrypt.compare(password, user.password, function(err, isMatch) {
			if (err) throw err;
			if (isMatch) {
				// Handle Match
				const payload = {
					id: user.id,
					name: user.name
				};

				jwt.sign(
					payload,
					config.keys,
					{expiresIn: 10 * 60 * 60},
					(err, token) => {res.json({success: true, token: "Bearer " + token});}
				);
			} else {
				return res.status(400).json({ passwordincorrect: "Password incorrect" });
			}
		});
	});
});

module.exports = router;