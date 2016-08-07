const mongoose = require('mongoose');
const schema = mongoose.Schema;

let url_schema = schema({
	_id: {type: String, required: true},
	link: {type: String, required: true},
	views: {type: Number, default: 0}
});

const url = mongoose.model('url', url_schema);

export url

