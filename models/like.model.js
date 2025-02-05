const mongoose = require("mongoose");

const opts = { timestamps: { createdAt: true, updatedAt: false } };

const likeSchema = new mongoose.Schema({
    postId: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        minlength: 3
    },
}, opts)

likeSchema.index({ postId: 1, username: 1 }, { unique: true });

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;
