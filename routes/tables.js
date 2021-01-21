var express = require("express");
var router = express.Router();
var data_base = require("../database");

const app = require("../app");
const con = require("../database");
const get_table_list = require("../utils/function");

// Get the `User-Data` list from `TB_USER` Tabl
get_table_list.get_table_list("user_list", "TB_USER");

// // Get the `Genre-Data` list from `TB_GENRE` Table.
// get_table_list("genre_list", "TB_GENRE");

// // Get the `Image-Data` list from `TB_IMAGR` Table.
// get_table_list("image_list", "TB_IMAGE");

// // Get the `Game-Data` list fromn `TB_GAME` Table.
// get_table_list("game_list", "TB_GAME");

// // Get the `Platform-List` list from `TB_PLATFORM` Table.
// get_table_list("platform_list", "TB_PLATFORM");

// // Get the `Publisher-List` list from `TB_PUBLISHER` Table
// get_table_list("publisher_list", "TB_PUBLISHER");