const { get_cAdmin,Add_cAdmin,delete_cAdmin,update_cAdmin, update_cAdmin_Password } = require('../models/cAdmin.model');
var nodemailer = require('nodemailer');

exports.add_Center_Admin = async (req,res) => {
    const cadmins =  await get_cAdmin();
    res.json(cadmins);
}

exports.createCadmin = async(req,res) => {
   const cadmins_res = await Add_cAdmin(req.body.id, req.body.nom, req.body.email, req.body.password);
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

exports.deleteCadmin = async(req,res) => {
    // console.log(req.params);
    delete_cAdmin(req.params.id);

}

exports.updateCadmin = (req,res) => {
    update_cAdmin(req.params.id, req.body.nom, req.body.email, req.body.password);
}

exports.updateCadminPassword = async(req,res) => {
    update_cAdmin_Password(req.params.id ,req.body.password);
}