var mysql = require("mysql");
var express = require("express");
var app = express();
var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "1234",
    database: "GameDB"
});

con.connect();

// Get the `User-Data` list from `TB_USER` Table.
app.get("/user-list", (req, res) => {
    con.query("SELECT * FROM TB_USER", function(err, result, fields){
        console.log(result);
        return res.json(result);
    });
});

// Get the `Genre-Data` list from `TB_GENRE` Table.
app.get("/genre_list", (req, res) => {
    con.query("SELECT * FROM TB_GENRE", function(err, result, fields){
        console.log(result);
        return res.json(result);
    });
});

// Get the `Image-Data` list from `TB_IMAGR` Table.
app.get("/image_list", (req, res) => {
    con.query("SELECT * FROM TB_IMAGE", function(err, result, fields){
        console.log(result);
        return res.json(result);
    });
});

// Get the `Game-Data` list fromn `TB_GAME` Table.
app.get("/game_list", (req, res) => {
    con.query("SELECT * FROM TB_GAME", function(err, result, fields){
        console.log(result);
        return res.json(result);
    });
});

app.listen(3001, (err) => console.log(3001));
