import {Tag} from '../tag';

export class TagForm {
  heading = 'Add Tag';

  // Default form values.
  id = null;
  name = '';
  slug = '';

  activate (params) {
    // Load tag if editing.
    if (params.hasOwnProperty('id')) {
      this.heading = 'Edit tag';
      return Tag.load(params.id).then(tag => {
        if (tag) {
          this.id = tag.id;
          this.name = tag.name;
          this.slug = tag.slug;
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

    }).catch(error => {
      console.error(error);
    });
  }
}
