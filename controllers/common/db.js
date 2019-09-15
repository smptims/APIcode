'user strict';
var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    port     : '3306',
    host     : 'localhost',
    user     : 'root',
    password : 'soft',
    database : 'smptims',
    insecureAuth : true
});

connection.connect(function(err) {
    console.log(err);
    if (err) throw err;
});

module.exports = connection;

