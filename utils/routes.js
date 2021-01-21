var express = require("express");
var router = express.Router();
const app = require("../app");
const con = require("../database");

var get_table_list = function get_list(file_dir, table_name){
    app.get("/" + file_dir, (req, res) => {
        con.query("SELECT * FROM " + table_name, function(err, result, fields){
            console.log(result);
            return res.json(result);
        });
    });
    return file_dir, table_name;
}

// Get the `User-Data` list from `TB_USER` Table
get_table_list("user", "TB_GENRE");

// Get the `Genre-Data` list from `TB_GENRE` Table.
get_table_list("genre", "TB_GENRE");

// Get the `Image-Data` list from `TB_IMAGR` Table.
get_table_list("image", "TB_IMAGE");

// Get the `Game-Data` list fromn `TB_GAME` Table.
get_table_list("game", "TB_GAME");

// Get the `Platform-List` list from `TB_PLATFORM` Table.
get_table_list("platform", "TB_PLATFORM");

// Get the `Publisher-List` list from `TB_PUBLISHER` Table
get_table_list("publisher", "TB_PUBLISHER");

get_table_list("game_list", "TB_GAME_LIST");
get_table_list("genre_list", "TB_GENRE_LIST");
get_table_list("image_list", "TB_IMAGE_LIST");
get_table_list("platform_list", "TB_PLATFORM_LIST");
