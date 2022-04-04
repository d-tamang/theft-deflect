const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PinSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    lat: {
        type: Number,
        require: true,
    },
    long: {
        type: Number,
        require: true,
    },
    category: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true
    }
});

module.exports = Pin = mongoose.model('pin', PinSchema);