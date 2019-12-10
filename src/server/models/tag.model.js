var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var tagSchema = new Schema({
	name: {type: String, required: true},
	email: {type: String, required: true},
	typetag: {type: String},
	loctag: {type: String},
	created_at: Date,
	updated_at: Date
	},
	{ collection: 'tags'}
);

// Saves update/creation date/time to database listing
tagSchema.pre('save', function(next) {
	var currDate = new Date();
	this.updated_at = currDate;	

	if (!this.created_at)
		this.created_at = currDate;

	next();
});

var Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;