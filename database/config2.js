const mysql = require('mysql8');

dbConnection = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'username',
    password:'password',
    database:'db_name',
});

dbConnection.connect((err) => {
    if(err) console.log();
    console.log("connected to db");
})

module.exports = dbConnection