import models from '../db/models';

export class Language {
  configureRouter(config, router) {
    config.map([
      {
        route: '',
        name: 'language-list',
        moduleId: './list/list',
        nav: true,
        title: 'All'
      },
      {
        route: 'add',
        name: 'language-add',
        moduleId: './form/form',
        nav: true,
        title: 'Add'
      },
      {
        route: 'edit/:id',
        name: 'language-edit',
        moduleId: './form/form',
        nav: false,
        title: 'Edit'
      },
      {
        route: 'view/:id',
        name: 'language-view',
        moduleId: './view/view',
        nav: false,
        title: 'View'
      },
    ]);

    this.router = router;
  }

  /**
   * Returns all languages.
   *
   * @return {Promise} A promise for an array of language information objects.
   */
  static all() {
    // @TODO pagination
    return models.Language.forge().fetchAll().then(results => {
      let languages = [];
      if (results.length) {
        results.models.forEach((item) => {
          languages.push(item.attributes);
        });
      }
      return languages;
    });
  }

  static load(id) {
    return models.Language.forge({ id: id }).fetch().then(language => {
      return language ? language.attributes : language;
    });
  }

  static save(data = {}) {
    return models.Language.forge(data).save();
  }

  /**
   * Deletes a language.
   *
   * @param  {int} id The language id.
   * @return {Promise}
   */
  static delete(id) {
    return models.Language.forge({ id: id }).fetch().then(language => {
      return language.destroy();
    });
  }
}
