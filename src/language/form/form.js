import {Language} from '../language';

export class LanguageForm {
  heading = 'Add Language';

  // Default form values.
  id = null;
  name = '';
  code = '';

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

    }).catch(error => {
      console.error(error);
    });
  }
}
