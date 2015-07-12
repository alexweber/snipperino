// Setup database.
import bookshelf from './bookshelf';

// Define models.
let Language, Snippet, Tag;

Language = bookshelf.Model.extend({
  tableName: 'languages',
  snippets: () => {
    return this.hasMany(Snippet);
  },
});

Snippet = bookshelf.Model.extend({
  tableName: 'snippets',
  hasTimestamps: true,
  language: () => {
    return this.belongsTo(Language);
  },
  tags: () => {
    return this.belongsToMany(Tag);
  },
});

Tag = bookshelf.Model.extend({
  tableName: 'tags',
  snippets: () => {
    return this.belongsToMany(Snippet);
  },
});

export default {
  Language,
  Snippet,
  Tag
};
