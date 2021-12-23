const conn = require('../../database/connection');

exports.getCenterAdminData = () =>{
    return new Promise((resolve, reject) =>{
        conn.query('SELECT * FROM centeradmin', (err, res)=>{
            resolve(res);
        })
    });
};