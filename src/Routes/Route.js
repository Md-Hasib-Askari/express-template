/*
* Add all your Routes here and export them
*/

const router = require('express').Router();

const Controller = require('../Controllers/Controller');

// Home Route
router.get('/', Controller.home);

module.exports = router;