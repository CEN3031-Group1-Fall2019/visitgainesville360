var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	bcrypt = require("bcryptjs");

const SALT_WORK_FACTOR = 10;

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

UserSchema.pre('save', function(next) {
    var user = this;
	if (!user.isModified('password')) return next();
	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    	if (err) return next(err);
   		bcrypt.hash(user.password, salt, function(err, hash) {
        	if (err) return next(err);
        	user.password = hash;
       		 next();
    	});
	});
});

module.exports = mongoose.model('User', UserSchema);