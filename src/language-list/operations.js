import {customElement, bindable} from 'aurelia-framework';
import {Language} from '../language/language';

@customElement('language-operations')
export class LanguageOperations {
  @bindable lang = {id:null};

  doDelete() {
    Language.delete(this.lang.id).then(function () {
      // @TODO proper messages.
      alert('langage deleted!');
    }).catch(function(error) {
      console.error(error);
    });
  }
}
