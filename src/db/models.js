// Setup database.
import bookshelf from './bookshelf';

// Define models.
let Language, Snippet, Tag, Settings;

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

Settings = bookshelf.Model.extend({
  tableName: 'settings',
});

export default {
  Language,
  Snippet,
  Tag,
  Settings,
};
