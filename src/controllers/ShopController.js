const req = require('express/lib/request');
const res = require('express/lib/response');
const User = require('../models/User');
const Pokemon = require('../models/Pokemon')
const MyPokemon = require('../models/MyPokemon')
const Shop = require('../models/Shop')

const ctr = {};

ctr.getShopItems = () => async (req, res) => {
  try {
    const shopItems = await Shop.query().select(
      'id',
      'item_id',
      'pokemon_id',
      'cost',
      'type'
    )
    res.json(shopItems)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

module.exports = ctr