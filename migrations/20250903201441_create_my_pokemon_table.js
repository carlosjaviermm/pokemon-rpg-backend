exports.up = async function (knex) {
  await knex.schema.createTable('my_pokemon', (t) => {
    t.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()')); // necesita extensión uuid-ossp o pgcrypto
    t.uuid('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
    t.uuid('pokemon_id').notNullable().references('id').inTable('pokemon').onDelete('CASCADE');
    t.integer('health_percentage').notNullable().defaultTo(100)
    t.boolean('b_active').notNullable().defaultTo(true)
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('my_pokemon');
};
