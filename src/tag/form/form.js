import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Tag} from '../tag';
let slug = require('slug');

@inject(Router)
export class TagForm {
  heading = 'Add Tag';

  // Default form values.
  id = null;
  name = '';

  constructor(Router) {
    this.router = Router;
  }

  get slug() {
    return slug(this.name, {mode: 'rfc3986'});
  }

  activate (params) {
    // Load tag if editing.
    if (params.hasOwnProperty('id')) {
      this.heading = 'Edit tag';
      return Tag.load(params.id).then(tag => {
        if (tag) {
          this.id = tag.id;
          this.name = tag.name;
        }
      });
    }
  }

  submit () {
    // @TODO validate
    let data = {
      id: this.id,
      name: this.name,
      slug: this.slug
    };
    Tag.save(data).then(result => {
      // @TODO better messages.
      alert('tag saved!');
      this.router.navigateToRoute('tag-list');
    }).catch(error => {
      console.error(error);
    });
  }
}
