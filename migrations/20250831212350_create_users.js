exports.up = async function (knex) {
  await knex.schema.createTable('users', (t) => {
    t.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()')); // necesita extensión uuid-ossp o pgcrypto
    t.string('username').notNullable().unique();
    t.string('email').notNullable().unique();
    t.string('password').notNullable();
    t.timestamp('date_created').defaultTo(knex.fn.now());
    t.boolean('b_active').defaultTo(true);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('users');
};
