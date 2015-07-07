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
        this.language = snippet.related('language');
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
