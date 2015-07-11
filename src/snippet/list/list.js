import {Snippet} from '../snippet';

export class SnippetList {
  snippets = [];

  activate() {
    return Snippet.all().then(snippets => {
      this.snippets = snippets;
    }).catch(error => {
      console.error(error);
    });
  }
}
