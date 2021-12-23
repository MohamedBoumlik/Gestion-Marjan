const { getAdminData } = require('../../models/adminG/admin.model')
var jwt = require('jsonwebtoken');
var  conn = require('../../database/connection')

exports.getAdmin = (req, res)=> {


  getAdminData((err,resultat) =>{
    if(err) throw err;
    console.log(resultat);
  });

};

exports.logAdmin = async(req, res)=> {
  const Admins = await getAdminData();
  const { email, password } = req.body;

  const CAdmin = Admins.find(
    (admin) =>
      admin.email == req.body.email && admin.password == req.body.password
  );

  if (CAdmin) {
    const token = jwt.sign(
      { id: CAdmin.id, email, password },
      `${process.env.JWT_SECRET_KEY}`,
      {
        expiresIn: "1h",
      }
    );

    // res.status(200).json(token);
    console.log('admin loged in successfully');

    conn.query(`UPDATE admin SET ? WHERE id =${CAdmin.id}`, {
      token: token,
    });
    
  } else{
    res.status(400).send('informations are not correct !')
  }

};