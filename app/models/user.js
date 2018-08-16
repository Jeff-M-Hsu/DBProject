var schema = mongoose.Schema;

var modelSchema = new Schema({
	name : String,
	username : String,
	password : String
});

var User = mongoose.model('User', modelSchema);