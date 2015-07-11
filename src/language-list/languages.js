import {Language} from '../language/language';

export class LanguageList {
  heading = 'Languages';
  languages = [];

  activate() {
    return Language.all().then(languages => {
      this.languages = languages;
    }).catch(function (error) {
      console.error(error);
    });
  }
};
