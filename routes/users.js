var express = require('express');
var router = express.Router();
var db=require('../database');
// var app = express();
console.log(db + " HI");

/* GET users listing. */
router.get('/user_list', function(req, res, next) {
  var sql = "SELECT * FROM TB_USER";
  console.log(sql);
  db.query(sql, function(err, data, fields){
    if(err) throw err;
    console.log(err);
    res.render("user_list", {title: "User List", userData: data});
  });
});


module.exports = router;
