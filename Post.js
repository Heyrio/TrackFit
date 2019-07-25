const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({

    name: {
        type: String,
    }

});


const Post = mongoose.model('Person', PostSchema);

module.exports = Post;