var express = require("express"),
	router = express.Router(),
	tag = require('../controllers/tag.db.controller'),
	biz = require('../controllers/biz.db.controller');

router.post("/create", function(req) {
	console.log("Routing to create listing");
	biz.createBiz(req, function(err) {
		if (err) throw err;
	});
});

router.post("/tag", function(req) {
	console.log("Routing to tagging");
	tag.createTag(req, function(err) {
		if (err) throw err;
	});
});

router.post("/get", function(req, res) {
	console.log("Routing to get a listing");
	var findById = {
		_id: req._id
	}
	console.log("using the request: ", findById);

	biz.findBiz(findById, function(err, listing) {
		if (err) throw err;

		console.log("Found the listing: ", listing);
		return res.json(listing);
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