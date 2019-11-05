var UserModel = require('../models/user.server.model.js');

exports.create = function(req, res) {
	var user = new UserModel(req.body);
};