import {Tag} from '../tag';

export class TagView {
  tag = null;
  snippets = [];

  canActivate(params) {
    return params.hasOwnProperty('id');
  }

  activate(params) {
    return Tag.load(params.id).then(tag => {
      this.tag = tag;
      // @TODO fetch associated snippets.
    }).catch(error => {
      console.log(error);
    });
  }

  // @TODO figure out how to reduce code duplication between this delete and the
  // one from the tag list page.
  doDelete() {
    // @TODO proper confirmation.
    let ok = confirm(`Are you sure you want to delete the tag: ${this.tag.name}?`);
    if (ok) {
      Tag.delete(this.tag.id).then(() => {
        // @TODO proper messages.
        alert('tag deleted!');
        this.router.navigateToRoute('tag-list');
      }).catch(error => {
        console.error(error);
      });
    }
  }
}
