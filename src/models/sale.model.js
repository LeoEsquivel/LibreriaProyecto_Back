const mongoose = require('mongoose');

const {Schema} = mongoose;

const SaleSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref:'user',
        required: true,
        autopopulate: true
    },
    book:{
        type: Schema.Types.ObjectId,
        ref: 'book',
        required: true,
        autopopulate: true
    },
    total: {type: Number, required: true}
});

SaleSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('sale', SaleSchema);