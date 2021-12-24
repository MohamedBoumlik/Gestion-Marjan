const { get_promo, add_promo, update_status, get_rayon_by_id } = require('../../models/centeradmin/promo.model')

exports.getPromo = async(req,res) => {
    const promo =  await get_promo();
    res.json(promo);
}

exports.insert_promo = async(req,res) => {
    const rayon = await get_rayon_by_id(req.body.rayon_id);
    let fidelite = (req.body.percentage/5)*50;

    rayon.forEach(element => {

        if(element.name == 'multimedia ' && req.body.percentage <= 20  || element.name !== 'multimedia ' && req.body.percentage <= 50 ) { 

            add_promo(req.body.percentage, req.body.prod_id, req.body.chef_rayon_id, req.body.status, req.body.commentaire, req.body.rayon_id, fidelite);
            console.log('added successfully');
        }else {

            console.log("that's not possible");
        }
    });
}

exports.update_status = (req,res) => {
   let date = new Date();
   let hour = date.getHours();
    //    console.log(hour);
    if(hour <= 12 && hour >= 8) {
        update_status(req.params.id,req.body.status);
    } else {
        console.log("You can't update this status");
    }
}
