const { BaseModel } = require('./BaseModel')

class Shop extends BaseModel {
  static get tableName(){
    return 'shop'
  }
}

module.exports = Shop