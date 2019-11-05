var mongoose = require("mongoose");
	Schema = mongoose.Schema;

// TK note: Added a specific DB collection
// TK note: had to add unique to these because it was allowing duplicates
var userSchema = new Schema({
	name: {type: String, required: true, unique: true},
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true}
	},{ collection: 'users'}
);
     
/* old version:
var userSchema = new Schema({
	name: {type: String, required: true},
	email: {type: String, required: true},
	password: {type: String, required: true}
});
*/

var User = mongoose.model('User', userSchema);
module.exports = User;