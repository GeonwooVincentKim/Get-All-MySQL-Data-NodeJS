var mysql = require("mysql");
var express = require("express");
const { deepStrictEqual } = require("assert");
var app = express();
var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "1234",
    database: "GameDB"
});

con.connect();

app.get("/", (req, res) => {
    con.query("SELECT * FROM TB_USER", function(err, result, fields){
        console.log(result);
        return res.json(result);
    });
});
// con.connect(function(err){
//     if(err) throw err;
//     console.log("connected");
//     con.query("SELECT * FROM TB_USER", function(err, result, fields){
//         if(err) throw err;
//         console.log(result);
//     });
//     con.query("SELECT * FROM TB_IMAGE", function(err, result, fields){
//         if(err) throw err;
//         console.log(result);
//     });
// })