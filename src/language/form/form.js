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
      });
    }
  }

  submit () {
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
}
