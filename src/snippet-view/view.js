import models from '../db/models';
let cp = require('safe-copy-paste');

export class SnippetView {
  snippet = null;
  language = null;
  langCode = null;

  canActivate(params) {
    return params.hasOwnProperty('id');
  }

  activate(params) {
    return models.Snippet.forge({ id: params.id }).fetch({ withRelated: ['language'] }).then((snippet) => {
      if (snippet) {
        this.snippet = snippet.attributes;
        let language = snippet.related('language');
        if (language.id) {
          this.language = language.attributes.name;
          this.langCode = language.attributes.code;
        }
      }
    }).catch(function (error) {
      console.error(error);
    });
  }

  clipboardCopy() {
    cp.copy(this.snippet.contents, function () {
      alert('done');
    });
  }
}

export class TagsValueConverter {
  toView(value){
    return value && value.join(', ');
  }
}
