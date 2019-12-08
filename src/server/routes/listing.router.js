var express = require("express"),
	router = express.Router(),
	biz = require('../controllers/biz.db.controller');

router.post("/create", function(req, res) {
	console.log("Routing to create listing");

	biz.findBiz({title: req.title}, function(err, bizExists) {
		if (err) throw err;

		if (bizExists) {
			return res.status(400).json({title: "Business already exists"})
		};

		console.log("Business doesn't exist. Adding biz to database.");
		biz.createBiz(req, function(err) {
			if (err) throw err;
		})
	});
});

router.post("/browse", function(req, res) {
	console.log("Routing to browse listings");

	biz.findAll(req, function(err, listings) {
		if (err) throw err;

		console.log("Found all within router. Returning a json");
		return res.json(listings);
	});
});

router.post("/image", function(req, res) {
	console.log("Routing to browse listings");

	biz.findAll(req, function(err, listings) {
		if (err) throw err;

		console.log("Found all within router. Returning a json");
		return res.json(listings);
	});
});

router.post("/get", function(req, res) {
	console.log("Routing to browse listings");

	biz.findAll(req, function(err, listings) {
		if (err) throw err;

		console.log("Found all within router. Returning a json");
		return res.json(listings);
	});
});

router.post("/admin", function(req, res) {
	console.log("Routing to browse listings");

	biz.findAll(req, function(err, listings) {
		if (err) throw err;

		console.log("Found all within router. Returning a json");
		return res.json(listings);
	});
});

module.exports = router;