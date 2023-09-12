/*
* Add all your Middleware functions here and export them
* */

exports.showMiddleware = (req, res, next) => {
    console.log("This is from middleware");
    next();
}