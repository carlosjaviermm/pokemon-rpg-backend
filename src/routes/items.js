const router = require('express').Router();
const ItemsController = require('../controllers/ItemsController')
const {verifyToken} = require ('../middlewares/authMiddleware')


router.get('/', verifyToken, ItemsController.GetAllItems())

module.exports = router;
