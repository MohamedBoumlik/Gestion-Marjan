const { getCenterAdminData } = require('../../models/centeradmin/centeradmin.model')
const jwt = require('jsonwebtoken');
const  conn = require('../../database/connection')


exports.getCenterAdmin = (req, res)=> {

    getCenterAdminData((err,resultat) =>{
      if(err) throw err;
      console.log(resultat);
    });
  
  };


  exports.logCenterAdmin = async(req, res)=> {
    const CenterAdmins = await getCenterAdminData();
    const { email, password } = req.body;
  
    const Found_centerAdmin = CenterAdmins.find(
      (centeradmin) =>
        centeradmin.email == req.body.email && centeradmin.password == req.body.password
    );
  
    if (Found_centerAdmin) {
      const token = jwt.sign(
        { id: Found_centerAdmin.id_centeradmin, email, password },
        `${process.env.JWT_SECRET_KEY}`,
        {
          expiresIn: "1h",
        }
      );
  
      console.log('center admin loged in successfully');

      // console.log(Found_centerAdmin.id_centeradmin);
      conn.query(`UPDATE centeradmin SET ? WHERE id_centeradmin =${Found_centerAdmin.id_centeradmin}`, {
        token: token,
      });
      
    } else{
      res.status(400).send('informations are not correct !')
    }
  
  };