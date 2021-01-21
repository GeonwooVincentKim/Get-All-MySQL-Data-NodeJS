var express = require("express");
var table_routers = express.Router();
var router = express.Router();
var app = express();
const con = require("../database");

var table_routers = function get_list(file_dir, table_name){
    app.get("/" + file_dir, (req, res) => {
        con.query("SELECT * FROM " + table_name, function(err, result, fields){
            console.log(result);
            return res.json(result);
        });
    });
    return file_dir, table_name;
}

module.exports = app;
// module.exports = function(){
//     file_dir = "";
//     table_name = "";
//     return get_table_list(file_dir, table_name);
// };
