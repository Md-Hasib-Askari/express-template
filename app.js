const app = require('express')();
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const router = require('./src/Routes/Route');

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(hpp({ checkBody: true, checkQuery: true }));

mongoose.connect('mongodb://127.0.0.1:27017/studentCRUD',
    { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/v1', router);
app.get('/', (_req, res) => {
    res.send('Welcome to the Express Template');
});

module.exports = app;