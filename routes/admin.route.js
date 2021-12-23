const express = require('express');
const router = express.Router();
const {getAdmin,logAdmin} = require('../controllers/admin.controller');

router.get('/',getAdmin);
router.post('/login',logAdmin);
router.post('/add-centerAdmin');

module.exports = router;