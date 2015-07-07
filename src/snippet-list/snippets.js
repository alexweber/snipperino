import models from '../db/models';

export class Snippets {
  heading = 'My Snippets';
  snippets = [];

  activate() {
    models.Snippet.forge().fetchAll().then((results) => {
      if (results.length) {
        results.models.forEach((item) => {
          this.snippets.push(item.attributes);
        });
      }
    }).catch(function (error) {
      console.error(error);
    });
  }
}
