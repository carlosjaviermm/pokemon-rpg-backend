const router = require('express').Router();
const UserController = require('../controllers/UserController')

// GET /users → list all users
router.get('/', UserController.getAllUsers());

router.post('/signup', UserController.Signup())

router.post('/login', UserController.logIn())

module.exports = router;
