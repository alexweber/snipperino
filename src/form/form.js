export class SnippetForm {
  heading = 'Add Snippet';

  // Available language options.
  languages = [];

  // Default form values.
  title = '';
  language = '';
  tags = '';
  contents = '';

  activate (params) {
    // @TODO figure out if edit form and update default values.
    if (params.hasOwnProperty('id')) {
      
    }

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

  submit () {
    console.log(this.title);
    console.log(this.language);
    console.log(this.tags);
    console.log(this.contents);
  }
}
