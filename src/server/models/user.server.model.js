var mongoose = require("mongoose");
	Schema = mongoose.Schema;

// TK note: Added a specific DB collection
// TK note: had to add unique to these because it was allowing duplicates
var userSchema = new Schema(
	{
	name: {type: String, required: true},
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	created_at: Date,
	updated_at: Date
	},
	{ collection: 'users2'}
);


// Saves update/creation date/time to database listing
userSchema.pre('save', function(next) {
	var currDate = new Date();

	this.updated_at = currDate;	

	if (!this.created_at)
		this.created_at = currDate;

	next();
});

var User = mongoose.model('User', userSchema);
module.exports = User;