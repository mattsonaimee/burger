const mysql = require('mysql');

const connection = mysql.createConnection({
host: 'localhost',
port: 3306,
user: 'root',
password: '#Nachos11',
database: 'burgers_db',
});

connection.connect((err) => {
    if (err) throw err;
    console.log( `Line 13 connection.js: connected as id ${connection.threadId}`);
});