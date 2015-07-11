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

  doSubmit () {
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

  // @TODO figure out how to reduce code duplication between this delete and the
  // one from the operations custom element.
  doDelete() {
    // @TODO proper confirmation.
    let ok = confirm(`Are you sure you want to delete the tag: ${this.name}?`);
    if (ok) {
      Tag.delete(this.id).then(function () {
        // @TODO proper messages.
        alert('tag deleted!');
        this.router.navigateToRoute('tag-list');
      }).catch(function(error) {
        console.error(error);
      });
    }
  }
}
