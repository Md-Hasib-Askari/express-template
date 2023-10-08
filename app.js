/*
* Add all your Express app configurations here
* */

const app = require('express')();
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');
const xssClean = require('xss-clean');

const router = require('./src/Routes/Route');
const demoMiddleware = require('./src/Middlewares/demo');

// Middlewares
app.use(cors());
app.use(helmet());
app.use(hpp({checkBody: true, checkQuery: true}));
app.use(xssClean());

app.all('/', router, demoMiddleware.showMiddleware);

module.exports = app;