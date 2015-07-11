import models from '../db/models';

export class Language {

  static delete(id) {
    return models.Language.forge({ id: id }).fetch().then(language => {
      return language.destroy();
    });
  }
}
