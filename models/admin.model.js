const conn = require('../database/connection');

exports.getAdminData = () =>{
    return new Promise((resolve, reject) =>{
        conn.query('SELECT * FROM admin', (err, res)=>{
            resolve(res);
        });
    });
};

// exports.addCAdmin = () => {

// }