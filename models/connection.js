const mysql = require('mysql2/promise');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tp_nodejs'
});

module.exports = {
    connection: db
}