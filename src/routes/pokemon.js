const router = require('express').Router();
const PokemonController = require('../controllers/PokemonController')
const {verifyToken} = require ('../middlewares/authMiddleware')

router.get('/', PokemonController.GetAllPokemon())
router.get('/starters', verifyToken, PokemonController.getStarters())
router.post('/catch', verifyToken, PokemonController.Catch())
router.patch('/sell', verifyToken, PokemonController.Sell())

module.exports = router;