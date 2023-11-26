const app = require('express')();
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');
const xssClean = require('xss-clean');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const router = require('./src/Routes/Route');

// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(hpp({checkBody: true, checkQuery: true}));
app.use(xssClean());

mongoose.connect('mongodb://127.0.0.1:27017/studentCRUD',
    {useNewUrlParser: true, useUnifiedTopology: true});

app.use('/api/v1', router);

module.exports = app;