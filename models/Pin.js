const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PinSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    lat: {
        type: Number,
        required: true,
    },
    long: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = Pin = mongoose.model('Pin', PinSchema);