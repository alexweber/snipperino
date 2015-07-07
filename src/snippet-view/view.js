import models from '../db/models';

export class ViewSnippet {
  snippet = null;
  language = null;

  canActivate(params) {
    return params.hasOwnProperty('id');
  }

  activate(params) {
    return models.Snippet.forge({ id: params.id }).fetch({ withRelated: ['language'] }).then((snippet) => {
      if (snippet) {
        this.snippet = snippet.attributes;
        let language = snippet.related('language');
        if (language.id) {
          this.language = language.name;
        }
      }
    }).catch(function (error) {
      console.error(error);
    });
  }
}

export class TagsValueConverter {
  toView(value){
    return value && value.join(', ');
  }
}
