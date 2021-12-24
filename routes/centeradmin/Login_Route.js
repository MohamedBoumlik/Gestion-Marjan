const express = require('express');
const router = express.Router();
const {logCenterAdmin, getCenterAdmin} = require('../../controllers/centeradmin/centeradmin.controller');

router.get('/',getCenterAdmin);
router.post('/login',logCenterAdmin);

module.exports = router;