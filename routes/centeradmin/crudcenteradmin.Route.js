const express = require('express');
const router = express.Router();
const {add_Chef_Rayon,create_Chef_Rayon,delete_Chef_Rayon,update_Chef_Rayon,update_Chef_RayonPassword} = require('../../controllers/centeradmin/crudcenteradmin.controller');

router.get('/crudcenteradmin',add_Chef_Rayon);
router.post('/createcenteradmin',create_Chef_Rayon);
router.delete('/deletecenteradmin/:id',delete_Chef_Rayon);
router.put('/updatecenteradmin/:id',update_Chef_Rayon);
router.put('/updatecenteradminPassword/:id',update_Chef_RayonPassword);


module.exports = router;