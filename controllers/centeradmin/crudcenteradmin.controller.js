const { get_crudcenterAdmin,Add_crudcenterAdmin,delete_crudcenterAdmin,update_crudcenterAdmin,update_crudcenterAdmin_Password } = require('../../models/centeradmin/crudcenteradmin.model');
var nodemailer = require('nodemailer');

exports.add_Chef_Rayon = async (req,res) => {
    const Chefrayon =  await get_crudcenterAdmin();
    res.json(Chefrayon);
}

exports.create_Chef_Rayon = async(req,res) => {
   const Chefrayon_res = await Add_crudcenterAdmin(req.body.id, req.body.nom, req.body.email, req.body.password, req.body.category_fk);
   var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'testcoding975@gmail.com',
            pass: 'testCoding1998'
        }
    });
    
    var mailOptions = {
        from: 'testcoding975@gmail.com',
        to: req.body.email,
        subject: 'Sending Email using Node.js',
        text: 'your password is : '+req.body.password
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        console.log(error);
        } else {
        console.log('Email sent successfully');
        }
    });
}

exports.delete_Chef_Rayon = async(req,res) => {
    // console.log(req.params);
    delete_crudcenterAdmin(req.params.id_res);

}

exports.update_Chef_Rayon = (req,res) => {
    // console.log(req.params.id, req.body.nom, req.body.email, req.body.category_fk);
    update_crudcenterAdmin(req.params.id, req.body.nom, req.body.email,req.body.password, req.body.category_fk);
}

exports.update_Chef_RayonPassword = async(req,res) => {
    update_crudcenterAdmin_Password(req.params.id_res ,req.body.password);
}