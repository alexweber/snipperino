import {Language} from '../language';

export class LanguageView {
  language = null;
  snippets = [];

  canActivate(params) {
    return params.hasOwnProperty('id');
  }

  activate(params) {
    return Language.load(params.id).then(language => {
      this.language = language;
      // @TODO fetch associated snippets.
    }).catch(error => {
      console.log(error);
    });
  }

  // @TODO figure out how to reduce code duplication between this delete and the
  // one from the language list page.
  doDelete() {
    // @TODO proper confirmation.
    let ok = confirm(`Are you sure you want to delete the language: ${this.language.name}?`);
    if (ok) {
      Language.delete(this.language.id).then(() => {
        // @TODO proper messages.
        alert('language deleted!');
        this.router.navigateToRoute('language-list');
      }).catch(error => {
        console.error(error);
      });
    }
  }
}
