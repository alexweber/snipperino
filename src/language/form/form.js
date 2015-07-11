import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Language} from '../language';

@inject(Router)
export class LanguageForm {
  heading = 'Add Language';

  // Default form values.
  id = null;
  name = '';
  code = '';

  constructor(Router) {
    this.router = Router;
  }

  activate (params) {
    // Load language if editing.
    if (params.hasOwnProperty('id')) {
      this.heading = 'Edit Language';
      return Language.load(params.id).then(language => {
        if (language) {
          this.id = language.id;
          this.name = language.name;
          this.code = language.code;
        }
      }).catch(error => {
        console.error(error);
      })
    }
  }

  doSubmit () {
    // @TODO validate
    let data = {
      id: this.id,
      name: this.name,
      code: this.code
    };
    Language.save(data).then(result => {
      // @TODO better messages.
      alert('language saved!');
      this.router.navigateToRoute('language-list');
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
}
