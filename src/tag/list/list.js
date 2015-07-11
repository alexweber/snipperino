import {Tag} from '../tag';

export class TagList {
  tags = [];

  activate() {
    return Tag.all().then(tags => {
      this.tags = tags;
    }).catch(error => {
      console.error(error);
    });
  }

  // @TODO figure out how to reduce code duplication between this delete and the
  // one from the tag edit form.
  doDelete(index) {
    let tag = this.tags[index];
    // @TODO proper confirmation.
    let ok = confirm(`Are you sure you want to delete the tag: ${tag.name}?`);
    if (ok) {
      Tag.delete(tag.id).then(() => {
        // @TODO proper messages.
        alert('tag deleted!');
        this.tags.splice(index, 1);
      }).catch(error => {
        console.error(error);
      });
    }
  }
};
