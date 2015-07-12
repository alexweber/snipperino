import {Snippet} from '../snippet';
let cp = require('safe-copy-paste');

export class SnippetView {
  snippet = null;
  language = null;
  langCode = null;

  canActivate(params) {
    return params.hasOwnProperty('id');
  }

  activate(params) {
    return Snippet.load(params.id).then(snippet => {
      if (snippet) {
        this.snippet = snippet;
      }
    }).catch(error => {
      console.error(error);
    });
  }

  clipboardCopy() {
    cp.copy(this.snippet.contents, () => {
      // @TODO better messages
      alert('copied!');
    });
  }
}

export class TagsValueConverter {
  toView(value){
    return value && value.join(', ');
  }
}
