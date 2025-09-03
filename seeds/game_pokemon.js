exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pokemon').del()
  await knex('pokemon').insert([

    {name: 'charmander',
     pokedex_number: '004',
      front_image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      back_image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png',
      base_damage: 52,
      base_health: 39,
     },
      {name: 'squirtle',
      pokedex_number: '007',
      front_image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
      back_image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png',
      base_damage: 52,
      base_health: 39,
     },
      {name: 'bulbasaur',
      pokedex_number: '001',
      front_image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      back_image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
      base_damage: 52,
      base_health: 39,
     }

  ]);
};
