import models from '../db/models';

export class LanguageForm {
  heading = 'Add Language';

  // Default form values.
  id = null;
  name = '';
  code = '';

  activate (params) {
    // Load language if editing.
    if (params.hasOwnProperty('id')) {
      return models.Language.forge({ id: params.id }).fetch().then((language) => {
        if (language) {
          let attrs = language.attributes;
          this.id = attrs.id;
          this.name = attrs.name;
          this.code = attrs.code;
        }
      });
    }
  }

  submit () {
    // @TODO validate
    models.Language.forge({
      id: this.id,
      name: this.name,
      code: this.code
    }).save().then(function (results) {
      alert('language saved!');
      // @TODO clear form & redirect
    }).catch(function (error) {
      console.error(error);
    });
  }
}
