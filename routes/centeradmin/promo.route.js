const express = require('express');
const router = express.Router();
const {getPromo,insert_promo, update_status} = require('../../controllers/centeradmin/promo.contro');

router.get('/get_promo',getPromo);
router.post('/add_promo',insert_promo);
router.put('/update_status/:id',update_status);

module.exports = router;