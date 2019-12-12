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
	tag.updateTag(req, function(err) {
		if (err) throw err;
	});
});

router.post("/get", function(req, res) {
	console.log("Routing to get a listing", req.body);
	var findById = {
		_id: req.body.id
	}
	console.log("using the request: ", findById);

	biz.findBiz(findById, function(listing) {
		console.log("Found the listing and returning");
		return res.json(listing);
	});
});

router.post("/browse", function(req, res) {
	console.log("Routing to browse listings");

	biz.findAll(req.body, function(err, listings) {
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