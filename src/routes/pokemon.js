const router = require('express').Router();
const PokemonController = require('../controllers/PokemonController')

router.post('/catch', PokemonController.Catch())

module.exports = router;
