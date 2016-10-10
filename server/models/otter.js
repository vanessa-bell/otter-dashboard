var mongoose = require("mongoose");

var OtterSchema = new mongoose.Schema({
	name: {type: String},
	age: {type: Number},
	color: {type: String}
}, {timestamps: true})

var Otter = mongoose.model('Otter',OtterSchema);