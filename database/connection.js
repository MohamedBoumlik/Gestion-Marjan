const mysql = require('mysql2');

// connection with DB
const conn = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'root',
    database: 'brief5'
});

conn.connect((err) => {
    if(err){throw err} 
    else{
        console.log('connected');
    }
});

module.exports = conn;