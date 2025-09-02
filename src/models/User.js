const { BaseModel } = require('./BaseModel');

class User extends BaseModel {
  static get tableName() {
    return 'users';
  }

  static get relationMappings() {
    // Define relationships here when needed
    // const Pokemon = require('./Pokemon');

    return {
      // Example: if users have pokemon
      // pokemon: {
      //   relation: BaseModel.HasManyRelation,
      //   modelClass: Pokemon,
      //   join: {
      //     from: 'users.id',
      //     to: 'user_pokemon.user_id'
      //   }
      // }
    };
  }
}

module.exports = User;
