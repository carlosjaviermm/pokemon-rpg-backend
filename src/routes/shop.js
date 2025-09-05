const router = require('express').Router();
const ShopController = require('../controllers/ShopController')

router.get('/', ShopController.getShopItems())

module.exports = router;
