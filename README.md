# Get-All-Data-NodeJS

This is a project template for [NodeJS](https://nodejs.org) apps.

*Note that you will need to have [Node.js](https://nodejs.org) installed.*

## Get Started

### 1. Install the dependencies

```cd MySQL-NodeJS
npm install
npm install -g mysql
```

### 2. Connects `MySQL` to this `Project`

```text
ALTER USER 'root'@'localhost'`
IDENTIFIED WITH mysql_native_password
BY yourPassword;

FLUSH PRIVILEGES;
```

### 3. Set your `host`, `user`, `password`, and `database` before you exist the Project

```text
var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "1234",
    database: "GameDB"
});
```

### 4. Then, Set your `table` names

```text
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    con.query("SELECT * FROM TB_USER", function(err, result, fields){
        if(err) throw err;
        console.log(result);
    });
});
```

## Further Information

### When you cannot find module `mysql` to `node.js`

```https://stackoverflow.com/questions/18134411/cannot-find-module-mysql-node-jsc```

### When your `mysql-Client` does not support `authentication protocal` request by `Server`

```https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server```

### Good to use this code when you exist this project

```https://www.w3schools.com/nodejs/nodejs_mysql_select.asp```
