const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Post = require('./Post');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Connecting to MongoDB 
const URI = 'mongodb+srv://admin:passabc@cluster0-zfho8.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(URI, { useNewUrlParser: true }).then(() => {
    /*eslint-disable*/
    console.log('Database connected...')
}).catch((err) => {
    console.log(err);
})

Post.find({}, (err, posts) => {
        console.log(posts)
    }),

    app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 4000;
app.listen(port, () => {
    /*eslint-disable*/
    console.log('server is running');
});