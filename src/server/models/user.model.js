var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: { 
		type: String,
		required: true},
	email: {
		type: String, 
		required: true, 
		unique: true},
	password: {
		type: String, 
		required: true},
	loginAttempts: {
		type: Number, 
		required: true, 
		default: 0},
	lockUntil: {
		type: Number }
});

module.exports = mongoose.model('User', UserSchema);