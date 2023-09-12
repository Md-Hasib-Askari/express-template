/*
* Add all your Helper functions here and export them
* */

exports.showMsg = (res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("Hello Express JS");
}