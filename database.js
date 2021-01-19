var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "1234",
    database: "GameDB"
});

con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    con.query("SELECT * FROM TB_USER", function(err, result, fields){
        if(err) throw err;
        console.log(result);
    });
    con.query("SELECT * FROM TB_IMAGE", function(err, result, fields){
        if(err) throw err;
        console.log(fields);
        // result.render('TB_IMAGE', {ID: })
    });
    con.query("SELECT * FROM TB_GAME", function(err, result, fields){
        if(err) throw err;
        console.log(fields);
    });
    // var resultArray = err.values(JSON.parse(JSON.stringify(err)));
    // print(resultArray);
});
module.exports = con;
// con.query(function(err){
//     if(err) throw err;
//     console.log("Parsing Data..");
    
// });

