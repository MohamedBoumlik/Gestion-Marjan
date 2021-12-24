const express = require('express');
const router = express.Router();
const {getPromo,insert_promo} = require('../../controllers/centeradmin/promo.contro');

router.get('/get_promo',getPromo);
router.post('/add_promo',insert_promo);

module.exports = router;