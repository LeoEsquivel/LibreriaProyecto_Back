const mongoose = require('mongoose');
const {Schema} = mongoose;

const CartSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        require: true,
    },
    books: [{
        type: Schema.Types.ObjectId,
        ref: 'book',
        required: true,
        autopopulate: true
    }],
    total: {type: Number}
});

CartSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('cart', CartSchema);



