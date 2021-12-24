const express = require('express');
const router = express.Router();
const {logChefRayon, getChefRayon} = require('../../controllers/ChefRayon/chefrayon.controller');

router.get('/',getChefRayon);
router.post('/login',logChefRayon);

module.exports = router;