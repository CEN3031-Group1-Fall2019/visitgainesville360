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
		login.createNewUser(req, function() {
			console.log("Logging in the user");
			var query = {email: req.body.email};
			login.findUsers(query, function(foundUser) {
				var user = foundUser[0];
				if (user) {
					const payload = {
						id: user.id,
						name: user.name,
						email: user.email,
						isAdmin: user.isAdmin
					};
					
					jwt.sign(
						payload,
						config.keys,
						{expiresIn: 10 * 60 * 60},
						(err, token) => {res.json({success: true, token: "Bearer " + token});}
					);
				} else {
					console.log("Error logging in for user during signup", user);
					return res.status(404).json({emailnotfound: "Error during signup"});
				}
			});
		});
	});
});

router.post("/login", function(req, res) {
	console.log("Finding user with email: ", req.body.email);
	var query = {email: req.body.email};
	login.findUsers(query, function(users) {
		if (!users) return res.status(404).json({emailnotfound: "Email not found"});
		console.log("Found the user");
		const password = req.body.password;
		var user = users[0];

		bcrypt.compare(password, user.password, function(err, isMatch) {
			if (err) throw err;
			if (isMatch) {
				const payload = {
					id: user.id,
					name: user.name,
					email: user.email,
					isAdmin: user.isAdmin
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

router.post("/browse", function(req, res) {
	console.log("Routing to browse users with query", req.body);

	login.findUsers(req.body, function (users) {
		console.log("Found a list of all users");
		return res.json(users);
	});
});

router.post("/modify", function(req, res) {
	console.log("Routing to modify user with query", req.body);
	var query = {'email': req.body.email};
	var update = req.body.updates;

	login.modify(query, update, function (err) {
		if (err) throw err;
	});
});

module.exports = router;