import {Language} from '../language';

export class LanguageList {
  languages = [];

  activate() {
    return Language.all().then(languages => {
      this.languages = languages;
    }).catch(error => {
      console.error(error);
    });
  }

  // @TODO figure out how to reduce code duplication between this delete and the
  // one from the edit form.
  doDelete(index) {
    let language = this.languages[index];
    // @TODO proper confirmation.
    let ok = confirm(`Are you sure you want to delete the language: ${language.name}?`);
    if (ok) {
      Language.delete(language.id).then(() => {
        // @TODO proper messages.
        alert('language deleted!');
        this.languages.splice(index, 1);
      }).catch(error => {
        console.error(error);
      });
    }
  }
};
