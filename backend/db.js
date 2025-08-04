const mysql = require("mysql2");

const db = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "sweet_db",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  })
  .promise();

module.exports = db;
