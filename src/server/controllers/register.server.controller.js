// TK WILL WRITE THIS JUST LEAVE ALONE FOR NOW

var UserModel = require('../models/user.server.model.js');

exports.create = function(req, res) {
	var user = new UserModel(req.body);
};