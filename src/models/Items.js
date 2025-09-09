const { BaseModel } = require('./BaseModel')

class Items extends BaseModel {
  static get tableName(){
    return 'items'
  }
}

module.exports = Items