/*
* Add all your controller function here and export them
* */
const welcome = require('../Helper/welcome');

exports.home = (req, res) => {
    welcome.showMsg(res);
    res.end();
}