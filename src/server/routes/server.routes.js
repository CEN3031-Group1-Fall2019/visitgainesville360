var express = require("express"),
	router = express.Router(),
	register = require('../controllers/register.server.controller.js');
	
router.post('/register')
	.post(register);
	
module.exports = router;