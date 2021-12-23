const express = require('express');
const router = express.Router();
const {add_Center_Admin,createCadmin,deleteCadmin,updateCadmin,updateCadminPassword} = require('../../controllers/adminG/cAdmin.controller');

router.get('/cAdmin',add_Center_Admin);
router.post('/create',createCadmin);
router.delete('/delete/:id',deleteCadmin);
router.put('/update/:id',updateCadmin);
router.put('/updatePassword/:id',updateCadminPassword);


module.exports = router;