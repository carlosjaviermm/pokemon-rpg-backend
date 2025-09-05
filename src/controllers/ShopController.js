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

ctr.buyShopItem = () => async (req, res) => {
  try {
    const { user_id, cost, coins, pokemon_id, item_id } = req.body;

    const userExists = await User.query().where('id', user_id)

    if(userExists.length === 0) {
      throw new Error('User does not exist')
    }

    if (coins < cost) {
      throw new Error('You do not have enough coins')
    }

    if (pokemon_id) {
      console.log('You are trying to buy a pokemon')
    } 
    
    else if (item_id) {
      console.log('You are trying to buy an item')
      const itemCost = await Shop.query().where({item_id}).select('cost')
      
      if (itemCost.length === 0) {
        throw new Error('Item does not exist in shop')
      }
      if (itemCost[0].cost !== cost) {
        throw new Error('Item cost does not match shop cost')
      }
      await User.query().findById(user_id).patch({
        coins: coins - cost
      })
      return res.status(200).json({message: 'Successfully bought item'})
    }

  } catch (error) {
    res.status(500).json ({error: error.message})
  }
}

module.exports = ctr