
exports.up = function(knex, Promise) {
  return knex.schema.createTable('settings', function (table) {
    table.string('name').primary();
    table.string('value');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('settings');
};
