const mongoose = require('mongoose');
const {Schema} = mongoose;

const EditorialSchema = Schema({
    name: {type: String, require: true}
});

module.exports = mongoose.model('editorial', EditorialSchema);