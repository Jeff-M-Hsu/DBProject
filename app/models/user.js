var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema(
{
	username: {type: String},
	password: {type: String},
});

UserSchema.get(function(){
	return this.username + '\n' + this.password;
});

module.exports = mongoose.model('User', UserSchema);