const mysql = require("mysql");
var connection;
require('dotenv').config();

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.password,
    database: "burgers_db",
  });
}

connection.connect((err) => {
  if (err) {
    console.error(`Line 13 connection.js. error connecting: ${err.stack}`);
    return;
  }
  console.log(`Line 16 connection.js: connected as id ${connection.threadId}`);
});

module.exports = connection;
