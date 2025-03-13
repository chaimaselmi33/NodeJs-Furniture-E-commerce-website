const mysql = require('mysql8');

dbConnection = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'Udacity33',
    database:'furniture_db',
});

dbConnection.connect((err) => {
    if(err) console.log();
    console.log("connected to db");
})

module.exports = dbConnection

