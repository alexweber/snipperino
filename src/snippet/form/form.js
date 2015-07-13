import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Language} from '../../language/language';
import {Snippet} from '../snippet';

@inject(Router)
export class SnippetForm {
  heading = 'Add Snippet';

  // Available language options.
  languages = [];

  // Snippet being edited.
  snippet = {};

  constructor(Router) {
    this.router = Router;
  }

  activate (params) {
    // Load all available languages.
    Language.all().then(languages => {
      this.languages = languages;
    }).catch(error => {
      console.error(error);
    });

    // Load snippet if editing.
    if (params.hasOwnProperty('id')) {
      this.heading = 'Edit Snippet';
      return Snippet.load(params.id, false).then(snippet => {
        this.snippet = snippet;
      }).catch(error => {
        console.error(error);
      });
    }
  }

  doSubmit () {
    // @TODO validate
    models.Snippet.forge(this.snippet).save().then(result => {
      if (result) {
        // @TODO better messages
        alert('Snippet saved!');
        this.router.navigateToRoute('snippet-list');
      }
    }).catch(error => {
      console.error(error);
    });
  }
}
