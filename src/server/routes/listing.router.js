var express = require("express"),
	router = express.Router(),
	biz = require('../controllers/biz.db.controller');

router.post("/create", function(req) {
	console.log("Routing to create listing");
	biz.createBiz(req, function(err) {
		if (err) throw err;
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

router.post("/admin", function(req, res) {
	console.log("Routing to browse listings");

	biz.findAll(req, function(err, listings) {
		if (err) throw err;

		console.log("Found all within router. Returning a json");
		return res.json(listings);
	});
});

module.exports = router;