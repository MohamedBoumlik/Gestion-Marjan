const conn = require('../../database/connection');

exports.get_cAdmin = () => {
    return new Promise((resolve, reject) =>{
        conn.query('SELECT * FROM centeradmin', (err, res)=>{
            resolve(res);
        });
    });
}

exports.Add_cAdmin = (id,nom,email,password) => {
    return new Promise((resolve, reject) =>{
        conn.query(`insert into centeradmin ( nom, email,password) VALUES ("${nom}","${email}","${password}")`, (err, res)=>{
            resolve(res);
        });
    });
}

exports.delete_cAdmin = (id) => {
    return new Promise((resolve, reject) =>{
        conn.query(`delete from centeradmin where id=${id}`, (err, res)=>{
            // resolve(res);
            console.log('Deleted successfully');
        });
    });
}

exports.update_cAdmin = (id,nom,email,password) => {
    // console.log(id,nom,email,password);
    return new Promise((resolve, reject) =>{
        conn.query(`UPDATE centeradmin SET nom = '${nom}', email= '${email}',password= '${password}' WHERE id =${id}`, (err, res)=>{
            // resolve(res);
            console.log("updated successfully");
        });
    });
}

exports.update_cAdmin_Password = (id,password) => {
    // console.log(id,password);
    return new Promise((resolve, reject) =>{
        conn.query(`UPDATE centeradmin SET password= '${password}' WHERE id =${id}`, (err, res)=>{
            // resolve(res);
            console.log("Password updated successfully");
        });
    });
}