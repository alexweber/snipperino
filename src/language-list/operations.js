import {customElement, bindable} from 'aurelia-framework';
import {Language} from '../language/language';

@customElement('language-operations')
export class LanguageOperations {
  @bindable lang;

  doDelete() {
    Language.delete(this.lang.id).then(function () {

    }).catch(function(error) {
      console.error(error);
    });
  }
}
