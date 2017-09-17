const mysql = require('mysql');
const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'qwe123',
	database: 'blog',
	port: 3306,
	multipleStatements: true
});

module.exports = pool;