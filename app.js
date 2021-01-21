var express = require("express");
var path = require("path");
var app = express();

var tablesRouter = require("./utils/function");
const con = require("./database");

var app = express();
// app.use("/", tablesRouter);
app.listen(3001, (err) => console.log(3001));

module.exports = app;
