import models from '../db/models';

export class LanguageList {
  heading = 'Languages';
  languages = [];

  activate() {
    return models.Language.forge().fetchAll().then((results) => {
      if (results.length) {
        results.models.forEach((item) => {
          this.languages.push(item.attributes);
        });
      }
    }).catch(function (error) {
      console.error(error);
    });
  }
};
