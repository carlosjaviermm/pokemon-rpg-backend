const router = require('express').Router();
const UserController = require('../controllers/UserController')

// GET /users → list all users
router.get('/', UserController.getAllUsers());

router.post('/signup', UserController.Signup())

router.get('/login', UserController.logIn())

module.exports = router;
