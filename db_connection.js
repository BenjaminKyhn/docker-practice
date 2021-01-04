const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    port: 8001,
    database: 'db'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
