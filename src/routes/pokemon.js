const router = require('express').Router();
const PokemonController = require('../controllers/PokemonController')

router.get('/', PokemonController.GetAllPokemon())
router.post('/catch', PokemonController.Catch())
router.patch('/sell', PokemonController.Sell())

module.exports = router;