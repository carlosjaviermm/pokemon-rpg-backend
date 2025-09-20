exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    {name: 'potion',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png'},

    {name: 'hyper potion', 
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/hyper-potion.png'},

    {name: 'max potion', 
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/max-potion.png'},

    {name: 'restore all',
    image: 'https://static.wikia.nocookie.net/pokemongo_es_gamepedia/images/a/a8/Potions.png/revision/latest?cb=20180912095707'
    }
  ]);
};
