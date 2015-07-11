import models from '../db/models';

export class Snippet {

  static all() {

  }

  static load(id) {
    return models.Snippet.forge({ id }).fetch({ withRelated: ['language'] }).then(snippet => {
      let retVal;
      if (snippet) {
        let attrs = snippet.attributes;
        retVal = {};
        retVal.id = attrs.id;
        retVal.title = attrs.title;
        // retVal.tags = attrs.tags;
        retVal.tags = [];
        retVal.contents = attrs.contents;
        retVal.language = null;

        let language = snippet.related('language');
        if (language.id) {
          retVal.language = language.id.toString();
        }
      }
      return retVal;
    });
  }
}
