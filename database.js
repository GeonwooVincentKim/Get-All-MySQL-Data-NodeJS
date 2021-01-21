var mysql = require("mysql");
var conn = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "1234",
    database: "GameDB"
});

// print(conn);
conn.connect(function(err){
    if(err) throw err;
    console.log("DataBase is connected successfully!!!");
    console.log(conn);
});
module.exports = conn;
// conn.connnect(function(err){
//     if(err) throw err;
//     connsole.log("connnected");
//     conn.query("SELECT * FROM TB_USER", function(err, result, fields){
//         if(err) throw err;
//         connsole.log(result);
//     });
//     conn.query("SELECT * FROM TB_IMAGE", function(err, result, fields){
//         if(err) throw err;
//         connsole.log(fields);
//         // result.render('TB_IMAGE', {ID: })
//     });
//     conn.query("SELECT * FROM TB_GAME", function(err, result, fields){
//         if(err) throw err;
//         connsole.log(fields);
//     });
//     // var resultArray = err.values(JSON.parse(JSON.stringify(err)));
//     // print(resultArray);
// });
module.exports = conn;
// conn.query(function(err){
//     if(err) throw err;
//     connsole.log("Parsing Data..");
// });
