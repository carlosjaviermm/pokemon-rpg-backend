export async function seed(knex) {
  await knex('shop').del();

const selectedPokemons = ['phanpy', 'grovyle', 'snorlax', 'reshiram'];

const items = await knex('items').select('id');

  const pokemons = await knex('pokemon')
    .select('id', 'name')
    .whereIn('name', selectedPokemons);

  const pokemonCosts = {
    phanpy: 35,
    grovyle: 82,
    snorlax: 126,
    reshiram: 250,
  };


  const itemCosts = {
    "e8800ace-83c4-4e3d-99c2-37b24fabd791": 10, //potion
    "20ddc9b8-513c-49b2-bfe2-001975874c55": 15, //hyper potion
    "a01552d3-164d-4b50-8fcc-143246e5c8b9": 20, //max potion
    "48923861-06dd-4ed4-a153-12edf6c8361f": 40, //restore all
  };

  const pokemonEntries = pokemons.map(p => ({
    pokemon_id: p.id,
    item_id: null,
    cost: pokemonCosts[p.name] ?? 0,
    type: 'pokemon'
  }));

  const itemEntries = items.map(i => ({
    pokemon_id: null,
    item_id: i.id,
    cost: itemCosts[i.id] ?? 0,
    type: 'item'
  }));

  await knex('shop').insert([...pokemonEntries, ...itemEntries]);
}