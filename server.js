const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();


//Connecting to MongoDB 



app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.json({
//         message: 'Behold The MEVN Stack!'
//     });
// });

const port = process.env.PORT || 8080;
app.listen(port, () => {
    /*eslint-disable*/
    console.log('server is running');
});