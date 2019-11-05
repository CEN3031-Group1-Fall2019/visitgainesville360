var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

// Schema for the Client's Business listings
var listingSchema = new Schema({

	email: { type: String, required: true, unique: true },
	name: { type: String, required: true },
// Commenting out coordinates for now, will put back in later.
/*
	coordinates: {
		latitude: Number,
		longitude: Number
	},
*/
	address: String,
	phone: Number,
	description: String,
	created_at: Date,
	updated_at: Date
},
	{ collection: 'listings' }
); // end of schema
      
      
// Saves update/creation date/time to database listing
listingSchema.pre('save', function(next) {
	var currDate = new Date();

	this.updated_at = currDate;	

	if (!this.created_at)
		this.created_at = currDate;

	next();
});

var Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
