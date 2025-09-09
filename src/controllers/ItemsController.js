const req = require('express/lib/request');
const res = require('express/lib/response');
const Items = require('../models/Items')

const ctr = {};

ctr.GetAllItems = () => async (req, res) => {
  try {
    const allItems = await Items.query().select(
      'id',
      'name',
      'image',
    )
    res.json(allItems)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

module.exports = ctr;