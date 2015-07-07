// let remote = require('remote');
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
    // @TODO load and update default values.
    if (params.hasOwnProperty('id')) {

    }

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
