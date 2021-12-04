const mongoose = require('mongoose');
const {Schema} = mongoose;

const BookSchema = new Schema({
    isbn: {type: String, required: true},
    title: {type: String, required:true},
    author: {
        type: Schema.Types.ObjectId,
        ref: 'author',
        require: true,
        autopopulate: true
    },
    editorial: {
        type: Schema.Types.ObjectId,
        ref: 'editorial',
        required: true,
        autopopulate: true
    }, 
    price: {type: Number, required: true},
    amounth: {type: Number, required: true},
    imgUrl: {type: String }
});

BookSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('book', BookSchema);