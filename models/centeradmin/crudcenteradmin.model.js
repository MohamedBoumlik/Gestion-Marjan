const conn = require('../../database/connection');

exports.get_crudcenterAdmin = () => {
    return new Promise((resolve, reject) =>{
        conn.query('SELECT * FROM chefrayon', (err, res)=>{
            resolve(res);
        });
    });
}

exports.Add_crudcenterAdmin = (id,nom,email,password,category_fk) => {
    return new Promise((resolve, reject) =>{
        conn.query(`insert into chefrayon ( nom, email,password,category_fk) VALUES ("${nom}","${email}","${password}","${category_fk}")`, (err, res)=>{
            resolve(res);
        });
    });
}

exports.delete_crudcenterAdmin = (id_res) => {
    return new Promise((resolve, reject) =>{
        conn.query(`delete from chefrayon where id=${id_res}`, (err, res)=>{
            // resolve(res);
            console.log('Deleted successfully');
        });
    });
}

exports.update_crudcenterAdmin = (id_res,nom,email,password,category_fk) => {
    // console.log(id_res,nom,email,password,category_fk);
    return new Promise((resolve, reject) =>{
        conn.query(`UPDATE chefrayon SET nom = '${nom}', email= '${email}',password= '${password}',category_fk = '${category_fk}' WHERE id_res =${id_res}`, (err, res)=>{
            // resolve(res);
            console.log("updated successfully");
        });
    });
}

exports.update_crudcenterAdmin_Password = (id_res,password) => {
    console.log(id,password);
    return new Promise((resolve, reject) =>{
        conn.query(`UPDATE chefrayon SET password= '${password}' WHERE id =${id_res}`, (err, res)=>{
            // resolve(res);
            console.log("Password updated successfully");
        });
    });
}