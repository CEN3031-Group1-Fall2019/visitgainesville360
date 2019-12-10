var express = require("express"),
	admin = express.Router(),
	biz = require('../controllers/biz.db.controller');

admin.post("/update", function(req) {
	var query = {'_id': req.body.listing._id};
	var update = req.body.updates;
	console.log("Routing to update listing", query);
	biz.adminUpdate(query, update, function(err) {
		if (err) throw err;
	});
});

admin.post("/notification", function(req, res) {
	console.log("Routing to notify listings");
	var query = req.body;
	console.log("with query", query);
	biz.countAll(query, function(count) {
		console.log("Counted", count);
		return res.json(count);
	});
});

module.exports = admin;