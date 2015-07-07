import models from '../db/models';

export class SnippetForm {
  heading = 'Add Snippet';

  // Available language options.
  languages = [];

  // Default form values.
  title = '';
  language = '';
  tags = '';
  contents = '';

  activate (params) {
    // Load all available languages.
    models.Language.forge().fetchAll().then(function (results) {
      console.log(results);
    }).catch (function (error) {
      console.error(error);
    });

    this.languages.push({
      id: 1,
      name: 'JavaScript',
      code: 'javascript'
    });
    this.languages.push({
      id: 2,
      name: 'PHP',
      code: 'php'
    });

    if (params.hasOwnProperty('id')) {
      return models.Snippet.forge({ id: params.id }).fetch({ withRelated: ['language'] }).then((snippet) => {
        if (snippet) {
          let attrs = snippet.attributes;
          this.title = attrs.title;
          // this.tags = attrs.tags;
          this.contents = attrs.contents;
          let language = snippet.related('language');
          if (language.hasOwnProperty('id')) {
            this.language = language.id;
          }
        }
      });
    }
  }

  submit () {
    // @TODO validate
    models.Snippet.forge({
      title: this.title,
      contents: this.contents
    }).save().then(function (results) {
      alert('Snippet saved!');
      // @TODO clear form & redirect
    }).catch(function (error) {
      console.error(error);
    });
  }
}
