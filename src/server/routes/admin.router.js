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

module.exports = admin;