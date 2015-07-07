import models from '../db/models';

export class SnippetForm {
  heading = 'Add Snippet';

  // Available language options.
  languages = [];

  // Default form values.
  id = null;
  title = '';
  language = '';
  tags = '';
  contents = '';

  activate (params) {
    // Load all available languages.
    models.Language.forge().fetchAll().then((results) => {
      if (results.length) {
        results.models.forEach((item) => {
          this.languages.push(item.attributes);
        });
      }
    }).catch (function (error) {
      console.error(error);
    });

    // Load snippet if editing.
    if (params.hasOwnProperty('id')) {
      this.heading = 'Edit Snippet';
      return models.Snippet.forge({ id: params.id }).fetch({ withRelated: ['language'] }).then((snippet) => {
        if (snippet) {
          let attrs = snippet.attributes;
          this.id = attrs.id;
          this.title = attrs.title;
          // this.tags = attrs.tags;
          this.contents = attrs.contents;
          let language = snippet.related('language');
          if (language.id) {
            this.language = language.id.toString();
          }
        }
      });
    }
  }

  submit () {
    // @TODO validate
    console.log(this);
    models.Snippet.forge({
      id: this.id,
      title: this.title,
      language_id: this.language,
      contents: this.contents
    }).save().then(function (result) {
      if (result) {
        alert('Snippet saved!');
        // @TODO clear form & redirect
      }
    }).catch(function (error) {
      console.error(error);
    });
  }
}
