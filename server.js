const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const UserInfo = require('./userInfo');

let data = null;

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

//Api end points
app.get('/all', (req, res) => {
    res.send(data);
});

// All data call
UserInfo.find({}, (err, info) => {
    data = info;
});

//CRUD operations
app.post('/', (req, res) => {
    console.log(req.body);
    let postUser = new UserInfo();
    postUser.firstName = req.body.firstName;
    postUser.lastName = req.body.lastName;
    postUser.email = req.body.email;
    postUser.height = req.body.height;
    postUser.weight = req.body.weight;
    postUser.age = req.body.age;
    postUser.password = req.body.password;
    postUser.save().then((err, res) => {
        console.log('saved!');
    })
});


const port = process.env.PORT || 4000;
app.listen(port, () => {
    /*eslint-disable*/
    console.log('server is running on port:', port);
});