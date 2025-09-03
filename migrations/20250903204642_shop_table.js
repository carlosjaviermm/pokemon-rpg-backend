exports.up = async function (knex) {
  await knex.schema.createTable('shop', (t) => {
    t.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'))
    t.uuid('item_id').nullable().references('id').inTable('items')
    t.uuid('pokemon_id').nullable().references('id').inTable('pokemon')
    t.integer('cost').notNullable()
    t.string('type').notNullable()
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('shop');
};
