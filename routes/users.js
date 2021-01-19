var express = require('express');
var router = express.Router();
var db=require('../database.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var sql = "SELECT * FROM TB_USER";
  db.query(sql, function(err, data, fields){
    if(err) throw err;
    console.log(err);
    res.sender("user-list", {title: "User List", userData: data});
  });
});

module.exports = router;
