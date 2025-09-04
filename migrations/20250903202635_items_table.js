exports.up = async function (knex) {
  await knex.schema.createTable('items', (t) => {
    t.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'))
    t.string('name').notNullable().unique()
    t.string('image').notNullable().unique()
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('items');
};

