const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();


//Connecting to MongoDB 
const URI = 'mongodb+srv://hamer1563:pass@cluster0-8nnoe.mongodb.net/test?retryWrites=true'
mongoose.connect(URI, { useNewUrlParser: true }).then(() => {
    /*eslint-disable*/
    console.log('Database connected...')
}).catch((err) => {
    console.log(err);
})

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 4000;
app.listen(port, () => {
    /*eslint-disable*/
    console.log('server is running');
});