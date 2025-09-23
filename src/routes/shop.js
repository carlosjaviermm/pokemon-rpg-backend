const router = require('express').Router();
const ShopController = require('../controllers/ShopController')
const {verifyToken} = require ('../middlewares/authMiddleware')


router.get('/', verifyToken, ShopController.getShopItems())

router.patch('/buy', verifyToken, ShopController.buyShopItem())

module.exports = router;
