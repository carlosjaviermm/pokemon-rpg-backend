exports.seed = async function (knex) {
  // Clean existing
  await knex('users').del();

  // Insert sample users
  await knex('users').insert([
    {
      id: knex.raw('gen_random_uuid()'),
      username: 'ash',
      email: 'ash@example.com',
      password: 'pikachu123',
      b_active: true,
    },
    {
      id: knex.raw('gen_random_uuid()'),
      username: 'misty',
      email: 'misty@example.com',
      password: 'starmie456',
      b_active: true,
    },
    {
      id: knex.raw('gen_random_uuid()'),
      username: 'brock',
      email: 'brock@example.com',
      password: 'onix789',
      b_active: true,
    },
    {
      id: knex.raw('gen_random_uuid()'),
      username: 'gary',
      email: 'gary@example.com',
      password: 'eevee321',
      b_active: true,
    },
    {
      id: knex.raw('gen_random_uuid()'),
      username: 'prof_oak',
      email: 'oak@example.com',
      password: 'pokedex000',
      b_active: true,
    },
    {
      id: knex.raw('gen_random_uuid()'),
      username: 'team_rocket',
      email: 'rocket@example.com',
      password: 'meowth999',
      b_active: false,
    },
  ]);
};
