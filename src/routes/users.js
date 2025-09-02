const router = require('express').Router();
const UserController = require('../controllers/UserController');

// GET /users → list all users
router.get('/', UserController.getAllUsers());

module.exports = router;
