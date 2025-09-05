const { BaseModel } = require('./BaseModel')

class MyPokemon extends BaseModel {
  static get tableName(){
    return 'my_pokemon'
  }
}

module.exports = MyPokemon