
exports.up = function(knex, Promise) {
  return knex.schema.createTable('snippets', function (table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.text('contents');
    table.timestamps();
  }).createTable('tags', function (table) {
    table.increments('id').primary();
    table.string('name', 150).notNullable();
    table.string('slug', 150).unique();
  }).createTable('languages', function (table) {
    table.increments('id').primary();
    table.string('name', 150).notNullable();
    table.string('slug', 150).unique();
  }).createTable('snippets_tags', function(table) {
    table.integer('snippet_id').references('snippets.id');
    table.integer('tag_id').references('tags.id');
  }).createTable('languages_snippets', function(table) {
    table.integer('language_id').references('languages.id');
    table.integer('snippet_id').references('snippets.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('snippets')
     .dropTable('tags')
     .dropTable('languages')
     .dropTable('snippets_tags')
     .dropTable('languages_snippets');
};
