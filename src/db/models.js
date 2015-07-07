// Setup database.
import bookshelf from './bookshelf';

// Define models.
let Language, Snippet, Tag;

Language = bookshelf.Model.extend({
  tableName: 'languages',
  snippets: function () {
    return this.hasMany(Snippet);
  }
});

Snippet = bookshelf.Model.extend({
  tableName: 'snippets',
  hasTimestamps: true,
  language: function () {
    return this.belongsTo(Language);
  },
  tags: function () {
    return this.belongsToMany(Tag);
  }
});

Tag = bookshelf.Model.extend({
  tableName: 'tags',
  snippets: function () {
    return this.belongsToMany(Snippet);
  }
});

export default {
  Language,
  Snippet,
  Tag
};
