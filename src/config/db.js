// src/config/db.js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'mysql-tpcac2024.alwaysdata.net',
  user: 'tpcac2024_db',
  password: 'i6qPBW3RPdeHx2h',
  database: 'tpcac2024_db',
});

module.exports = pool.promise();
