const conn = require('../../database/connection');

exports.get_promo = () => {
    return new Promise((resolve, reject) =>{
        conn.query('SELECT * FROM promotion', (err, res)=>{
            resolve(res);
        });
    });
}

exports.add_promo = (percentage,prod_id,chef_rayon_id,status,commentaire,rayon_id, fidelite) => {
    // console.log(percentage,prod_id,chef_rayon_id,status,commentaire,rayon_id);
    conn.query(`INSERT INTO promotion (percentage, prod_id, chef_rayon_id, status, commentaire, rayon_id, fidelite) VALUES (${percentage}, ${prod_id}, ${chef_rayon_id}, "${status}", "${commentaire}", ${rayon_id}, '${fidelite}')`) ,(err,result) =>{
        if(err) throw err;
        console.log('inserted succeffully ');
    }
}

exports.update_status = (id,status) => {
    // console.log(id,status);
    conn.query(`UPDATE promotion SET status = '${ status }' WHERE id = ${id}`) ,(err) =>{
        if(err) throw err;
    }
}

exports.get_rayon_by_id = (id) => {
    return new Promise((resolve, reject) =>{
        conn.query(`select * from rayon where id= ${id} `, (err, res)=>{
            resolve(res);
        });
    });
}