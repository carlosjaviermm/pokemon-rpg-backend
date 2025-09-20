const router = require('express').Router();
const ShopController = require('../controllers/ShopController')

router.get('/', ShopController.getShopItems())

router.patch('/buy', ShopController.buyShopItem())

module.exports = router;
