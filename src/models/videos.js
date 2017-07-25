var mongoose = require('mongoose');

var Video = mongoose.Schema;

var ModelVideoSchema = new Video({
	name: String,
	description: String
});

module.exports = mongoose.model('ModelVideo', ModelVideoSchema );