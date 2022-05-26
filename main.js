/* jshint esversion: 6 */

var path = require('path');
var express = require("express");
var app = express();
var port = 5000;

app.use(express.static(path.join(__dirname, '/public')));

var server = app.listen(port, function () {
    console.log("Server running on port " + port);
});