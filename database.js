var mysql = require("mysql");
var express = require("express");

// Import files
var functionRouter = require("./utils/function");

var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "1234",
    database: "GameDB"
});

con.connect();
module.exports = con;