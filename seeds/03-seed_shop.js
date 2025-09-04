export async function seed(knex) {
  await knex('shop').del();

const selectedPokemons = ['phanpy', 'grovyle', 'snorlax', 'reshiram'];
const items = await knex('items').select('id');

  const pokemons = await knex('pokemon')
    .select('id', 'name')
    .whereIn('name', selectedPokemons);

  const pokemonEntries = pokemons.map(p => ({
    pokemon_id: p.id,
    item_id: null,
    cost: 0,
    type: 'pokemon'
  }));

  const itemEntries = items.map(i => ({
    pokemon_id: null,
    item_id: i.id,
    cost: 0,
    type: 'item'
  }));

  await knex('shop').insert([...pokemonEntries, ...itemEntries]);
}