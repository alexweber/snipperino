import {Language} from '../../language/language';
import {Snippet} from '../snippet';

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
    Language.all().then(languages => {
      this.languages = languages;
    }).catch(function (error) {
      console.error(error);
    });

    // Load snippet if editing.
    if (params.hasOwnProperty('id')) {
      this.heading = 'Edit Snippet';
      return Snippet.load(params.id).then(snippet => {
        // @TODO assign vars
        console.log(snippet);
        {
          id: this.id,
          title: this.title,
          language: this.language,
          tags: this.tags,
          contents: this.contents
        } = snippet;
      }).catch(error => {
        console.error(error);
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
