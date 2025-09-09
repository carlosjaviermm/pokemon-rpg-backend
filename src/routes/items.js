const router = require('express').Router();
const ItemsController = require('../controllers/ItemsController')

router.get('/', ItemsController.GetAllItems())

module.exports = router;
