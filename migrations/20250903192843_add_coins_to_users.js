exports.up = async function (knex) {
  await knex.schema.alterTable("users", (t) => {
    t.integer("coins").notNullable().defaultTo(25);
  });
};

exports.down = async function (knex) {
  await knex.schema.alterTable("users", (t) => {
    t.dropColumn("coins");
  });
};
