var express = require("express");
var router = express.Router();
const app = require("../app");
const con = require("../database");

get_table_list = function get_list(file_dir, table_name){
    app.get("/" + file_dir, (req, res) => {
        con.query("SELECT * FROM " + table_name, function(err, result, fields){
            console.log(result);
            return res.json(result);
        });
    });
    return file_dir, table_name;
}

module.exports = get_table_list;