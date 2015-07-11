import {customElement, bindable} from 'aurelia-framework';
import {Tag} from '../tag';

@customElement('tag-operations')
export class TagOperations {
  @bindable tag = {id:null};

  doDelete() {
    Tag.delete(this.tag.id).then(function () {
      // @TODO proper messages.
      alert('tag deleted!');
    }).catch(function(error) {
      console.error(error);
    });
  }
}
