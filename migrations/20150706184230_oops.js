
exports.up = function(knex, Promise) {
  return knex.schema.table('snippets', function (table) {
    table.renameColumn('name', 'title');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('snippets', function (table) {
    table.renameColumn('title', 'name');
  });
};
