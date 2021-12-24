const conn = require('../../database/connection');

exports.getchefrayonData = () =>{
    return new Promise((resolve, reject) =>{
        conn.query('SELECT * FROM chefrayon', (err, res)=>{
            resolve(res);
        })
    });
};