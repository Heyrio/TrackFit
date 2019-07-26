const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Post = require('./Post');
const app = express();

let data = null;
let newData = null;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Connecting to MongoDB 
const URI = 'mongodb+srv://admin:260182abc@cluster0-zfho8.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(URI, { useNewUrlParser: true }).then(() => {
        /*eslint-disable*/
        console.log('Database connected...')
    }).catch((err) => {
        console.log(err);
    })
    // Needs to be above the requests
app.use(cors());

app.get('/', (req, res) => {
    res.send(data);
});


//CRUD operations
Post.find({}, (err, posts) => {
    data = posts;
});


const port = process.env.PORT || 4000;
app.listen(port, () => {
    /*eslint-disable*/
    console.log('server is running on port:', port);
});