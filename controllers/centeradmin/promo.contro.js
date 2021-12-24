const { get_promo, add_promo } = require('../../models/centeradmin/promo.model')

exports.getPromo = async(req,res) => {
    const promo =  await get_promo();
    res.json(promo);
}

exports.insert_promo = (req,res) => {
    add_promo(req.body.percentage, req.body.prod_id, req.body.chef_rayon_id, req.body.status, req.body.commentaire, req.body.rayon_id);
    // console.log(req.body.percentage);
}
