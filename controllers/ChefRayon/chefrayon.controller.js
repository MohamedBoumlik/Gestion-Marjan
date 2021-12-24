const { getchefrayonData } = require('../../models/ChefRayon/chefrayon.model')
const jwt = require('jsonwebtoken');
const  conn = require('../../database/connection')


exports.getChefRayon = (req, res)=> {

    getchefrayonData((err,resultat) =>{
      if(err) throw err;
      console.log(resultat);
    });
  
  };


  exports.logChefRayon = async(req, res)=> {
    const ChefRayons = await getchefrayonData();
    const { email, password } = req.body;
  
    const Found_chefrayon = ChefRayons.find(
      (chefrayon) =>
      chefrayon.email == req.body.email && chefrayon.password == req.body.password
    );
  
    if (Found_chefrayon) {
      const token = jwt.sign(
        { id: Found_chefrayon.id_res, email, password },
        `${process.env.JWT_SECRET_KEY}`,
        {
          expiresIn: "1h",
        }
      );
  
      console.log('chef rayon admin loged in successfully');

      // console.log(Found_centerAdmin.id_centeradmin);
      conn.query(`UPDATE chefrayon SET ? WHERE id_res =${Found_chefrayon.id_res}`, {
        token: token,
      });
      
    } else{
      res.status(400).send('informations are not correct !')
    }
  
  };