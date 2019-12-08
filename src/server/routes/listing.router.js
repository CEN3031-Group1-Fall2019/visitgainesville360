var express = require("express"),
	router = express.Router(),
	biz = require('../controllers/biz.db.controller');

router.post("/create", function(req) {
	console.log("Routing to create listing");
	biz.createBiz(req, function(err) {
		console.log("1111");
		if (err) throw err;
		console.log("222");
	});
	console.log("3333");
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