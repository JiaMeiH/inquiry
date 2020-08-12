var mysql = require('mysql');

var pool  = mysql.createPool({
    user: 'root',
    password: '',
    host: 'localhost',
    database: 'inquiry_v3', 
    waitForConnections : true, 
    connectionLimit : 200       
});
0
module.exports = pool;