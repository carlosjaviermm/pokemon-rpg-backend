const req = require('express/lib/request');
const res = require('express/lib/response');
const User = require('../models/User');
const Pokemon = require('../models/Pokemon')
const MyPokemon = require('../models/MyPokemon')


const ctr = {};

ctr.Catch = () => async (req, res) => {
  try{
  const { user_id, pokemon_id } = req.body;

  const userExists = await User.query().where('id', user_id)
  const pokemonExists = await Pokemon.query().where('id', pokemon_id)
  const alreadyCaught = await MyPokemon.query().where({user_id, pokemon_id})

  if(userExists.length === 0) {
    throw new Error('User does not exist')
  }

  if(pokemonExists.length === 0){
    throw new Error('Pokemon does not exist')
  }

  if(alreadyCaught.length > 0){
    throw new Error('You already have that pokemon')
  }

  await MyPokemon.query().insert({
    user_id,
    pokemon_id
  })

  res.status(200).json({message:'Successfully caught pokemon'})

} catch (error) {
  res.status(500).json({error: error.message})
}

} 

module.exports = ctr;
