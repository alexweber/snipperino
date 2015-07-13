import models from '../db/models';

export class Snippet {
  configureRouter(config, router) {
    config.map([
      {
        route: '',
        name: 'snippet-list',
        moduleId: './list/list',
        nav: true,
        title: 'All'
      },
      {
        route: 'add',
        name: 'snippet-add',
        moduleId: './form/form',
        nav: true,
        title: 'Add'
      },
      {
        route: 'edit/:id',
        name: 'snippet-edit',
        moduleId: './form/form',
        nav: false,
        title: 'Edit'
      },
      {
        route: 'view/:id',
        name: 'snippet-view',
        moduleId: './view/view',
        nav: false,
        title: 'View'
      },
    ]);

    this.router = router;
  }

  /**
   * Returns all snippets.
   *
   * @return {Promise} A promise for an array of snippet plain objects.
   */
  static all() {
    // @TODO pagination
    return models.Snippet.forge().fetchAll().then(results => {
      let snippets = [];
      if (results.length) {
        results.models.forEach(item => {
          let snippet = Snippet._buildSnippet(item);
          if (snippet) {
            snippets.push(snippet);
          }
        });
      }
      return snippets;
    });
  }

  /**
   * Helper method to preprocess a Snippet bookshelf model and return a plain object
   * for use in view models.
   *
   * @param  {Snippet} snippet A Snippet bookshelf model object.
   * @param  {boolean} [related] Whether to load related fields, defaults to true.
   * @return {mixed} A snippet information plain object or null.
   *
   * @see Snippet._getLanguage()
   * @see Snippet._getTags()
   */
  static _buildSnippet(snippet, related = true) {
    let retVal = null;
    if (snippet) {
      let attrs = snippet.attributes;
      retVal = {};
      retVal.id = attrs.id;
      retVal.title = attrs.title;
      retVal.contents = attrs.contents;
      // @TODO verify this
      retVal.language_id = attrs.language_id;
      // @TODO add tags.

      if (related) {
        retVal.language = Snippet._getLanguage(snippet);
        retVal.tags = Snippet._getTags(snippet);
      }
    }
    return retVal;
  }

  /**
   * Helper method to return language information for a snippet.
   *
   * @param  {Snippet} snippet A Snippet bookshelf model object.
   * @return {mixed} A language information plain object if available or null.
   */
  static _getLanguage(snippet) {
    let retVal = null;
    let language = snippet.related('language');
    if (language.id) {
      retVal = {
        id: language.id,
        name: language.attributes.name,
        code: language.attributes.code,
      };
    }
    return retVal;
  }

  /**
   * Helper method to return tags information for a snippet.
   *
   * @param  {Snippet} snippet A Snippet bookshelf model object.
   * @return {mixed} An array of tag information plain objects available or null.
   */
  static _getTags(snippet) {
    let retVal = null;
    let tags = snippet.related('tags');
    // @TODO figure this out when we have actual tag data saved.
    return retVal;
  }

  /**
   * Load a snippet by id.
   *
   * @param  {integer} id A snippet id.
   * @param  {boolean} [related] Whether to load related fields, defaults to true.
   * @return {Promise} A promise for a snippet plain object containg language and tags
   *                   info as plain objects if available.
   */
  static load(id, related = true) {
    let options = {};
    if (related) {
      options.withRelated = ['language', 'tags'];
    }
    return models.Snippet.forge({ id }).fetch(options).then(snippet => {
      return Snippet._buildSnippet(snippet, related);
    });
  }
}
