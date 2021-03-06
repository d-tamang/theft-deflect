const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    pin: {
        type: Schema.Types.ObjectId,
        ref: 'Pin'
    },
    text: {
        type: String,
        required: true
    }
});

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;