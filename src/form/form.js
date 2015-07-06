export class SnippetForm {
  heading = 'Add Snippet';

  // Available language options.
  languages = [];

  // Default form values.
  title = '';
  language = '';
  tags = '';
  contents = '';

  activate () {
    // @TODO figure out if edit form and update default values.
    // @TODO load available languages.
    this.languages.push({
      id: 1,
      name: 'JavaScript'
    });
    this.languages.push({
      id: 2,
      name: 'PHP'
    });
  }
}
