var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

// Schema for the Client's Business
var bizSchema = new Schema({
	email: String,
	address: String,
	phone: String,
	state: String,
	zip: String,
	isPosted: {type: Boolean, default: false},
	hours: {
		Monday: {
			startTime: Date,
			endTime: Date
		},
		Tuesday: {
			startTime: Date,
			endTime: Date
		},
		Wednesday: {
			startTime: Date,
			endTime: Date
		},
		Thursday: {
			startTime: Date,
			endTime: Date
		},
		Friday: {
			startTime: Date,
			endTime: Date
		},
		Saturday: {
			startTime: Date,
			endTime: Date
		},
		Sunday: {
			startTime: Date,
			endTime: Date
		},
	},
	description: String,
	created_at: Date,
	updated_at: Date
	},{ collection: 'biz' }
);
            
// Saves update/creation date/time to database listing
bizSchema.pre('save', function(next) {
	var currDate = new Date();

	this.updated_at = currDate;	

	if (!this.created_at)
		this.created_at = currDate;

	next();
});

var Biz = mongoose.model('Biz', bizSchema);

module.exports = Biz;
