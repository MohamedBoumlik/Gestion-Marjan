const conn = require('../../database/connection');

exports.get_promo = () => {
    return new Promise((resolve, reject) =>{
        conn.query('SELECT * FROM promotion', (err, res)=>{
            resolve(res);
        });
    });
}

exports.add_promo = (percentage,prod_id,chef_rayon_id,status,commentaire,rayon_id) => {
    // console.log(percentage,prod_id,chef_rayon_id,status,commentaire,rayon_id);
    conn.query(`INSERT INTO promotion (percentage, prod_id, chef_rayon_id, status, commentaire, rayon_id) VALUES (${percentage}, ${prod_id}, ${chef_rayon_id}, "${status}", "${commentaire}", ${rayon_id})`) ,(err,result) =>{
        if(err) throw err;
        console.log('inserted succeffully ');
    }
}