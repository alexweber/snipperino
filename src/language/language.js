import models from '../db/models';

export class Language {

  /**
   * Returns all languages.
   *
   * @return {Promise} A promise for an array of language information objects.
   */
  static all() {
    // @TODO pagination
    return models.Language.forge().fetchAll().then((results) => {
      let languages = [];
      if (results.length) {
        results.models.forEach((item) => {
          languages.push(item.attributes);
        });
      }
      return languages;
    })
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
