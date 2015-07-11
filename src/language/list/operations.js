import {customElement, bindable} from 'aurelia-framework';
import {Language} from '../language';

@customElement('language-operations')
export class LanguageOperations {
  @bindable lang = {id:null};

  doDelete() {
    // @TODO proper confirmation.
    let ok = confirm(`Are you sure you want to delete the language: ${this.lang.name}?`);
    if (ok) {
      Language.delete(this.lang.id).then(function () {
        // @TODO proper messages.
        alert('langage deleted!');
      }).catch(function(error) {
        console.error(error);
      });
    }
  }
}
