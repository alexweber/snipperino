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
          snippets.push(item.attributes);
        });
      }
      return snippets;
    });
  }

  static load(id) {
    return models.Snippet.forge({ id }).fetch({ withRelated: ['language'] }).then(snippet => {
      let retVal;
      if (snippet) {
        let attrs = snippet.attributes;
        retVal = {};
        retVal.id = attrs.id;
        retVal.title = attrs.title;
        // retVal.tags = attrs.tags;
        retVal.tags = [];
        retVal.contents = attrs.contents;
        retVal.language = null;

        let language = snippet.related('language');
        if (language.id) {
          retVal.language = language.id.toString();
        }
      }
      return retVal;
    });
  }
}
