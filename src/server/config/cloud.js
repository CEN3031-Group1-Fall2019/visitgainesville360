var multer = require("multer"),
	config = require('./config');

/**
 * Initialize Cloudinary to host photos
 */

module.exports.start = function() {
	const storage = multer.diskStorage({
		filename: function(req, file, cb) {
			cb(null, Date.now() + file.originalname);
		}
	});
	
	const imageFilter = function(req, file, cb) {
		if (!file.originalname.match(/\.(jpg|jpeg)$/i)) {
			return cb(
				new Error("Only image files are accepted!"), false);
		}
		cb(null, true);
	};

	const upload = multer({ storage: storage, fileFilter: imageFilter });
	const cloudinary = require("cloudinary");
	cloudinary.config({
		cloud_name: config.CLOUDINARY_NAME,
		api_key: config.CLOUDINARY_API,
		api_secret: config.CLOUDINARY_SECRET
	});
};