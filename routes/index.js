var express = require('express');
var router = express.Router();
var db=require('../database');

/* GET home page. */
router.get('/user-list', function(req, res, next) {
  res.render('index', { title: 'Express', userData: data});
});

module.exports = router;
