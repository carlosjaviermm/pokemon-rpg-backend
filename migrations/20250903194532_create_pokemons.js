exports.up = async function (knex) {
  await knex.schema.createTable('pokemon', (t) => {
    t.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()')); // necesita extensión uuid-ossp o pgcrypto
    t.string('name').notNullable().unique();
    t.string('pokedex_number').notNullable().unique();
    t.string('front_image').notNullable().unique()
    t.string('back_image').notNullable().unique()
    t.integer('base_damage').notNullable().defaultTo(0);
    t.integer('base_health').notNullable().defaultTo(0);
    t.boolean('b_active').notNullable().defaultTo(true)
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('pokemon');
};
