import {Tag} from '../tag';

export class TagView {
  tag = null;

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
}
