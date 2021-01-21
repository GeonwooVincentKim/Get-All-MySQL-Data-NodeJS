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

var get_table_list = function get_list(file_dir, table_name){
    app.get("/" + file_dir, (req, res) => {
        con.query("SELECT * FROM " + table_name, function(err, result, fields){
            console.log(result);
            return res.json(result);
        });
    });
    return file_dir, table_name;
}

// Get the `User-Data` list from `TB_USER` Table.
get_table_list("user_list", "TB_USER");

// Get the `Genre-Data` list from `TB_GENRE` Table.
get_table_list("genre_list", "TB_GENRE");

// Get the `Image-Data` list from `TB_IMAGR` Table.
get_table_list("image_list", "TB_IMAGE");

// Get the `Game-Data` list fromn `TB_GAME` Table.
get_table_list("game_list", "TB_GAME");

// Get the `Platform-List` list from `TB_PLATFORM` Table.
get_table_list("platform_list", "TB_PLATFORM");

// Get the `Publisher-List` list from `TB_PUBLISHER` Table
get_table_list("publisher_list", "TB_PUBLISHER");

app.listen(3001, (err) => console.log(3001));
