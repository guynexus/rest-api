// SQLite3 Database

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./sqlite/company.db', sqlite3.OPEN_READWRITE);
module.exports = db; 

  
