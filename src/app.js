import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import 'highlight.js/styles/monokai_sublime.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Snipperino';
    config.map([
      {
        route: ['', 'snippets'],
        name: 'snippet-list',
        moduleId: './snippet-list/snippets',
        nav: true,
        title: 'Snippets'
      },
      {
        route: 'snippet/add',
        name: 'snippet-add',
        moduleId: './snippet-form/form',
        nav: false,
        title: 'Add Snippet'
      },
      {
        route: 'snippet/edit/:id',
        name: 'snippet-edit',
        moduleId: './snippet-form/form',
        nav: false,
        title: 'Edit Snippet'
      },
      {
        route: 'snippet/view/:id',
        name: 'snippet-view',
        moduleId: './snippet-view/view',
        nav: false,
        title: 'View Snippet'
      },
      {
        route: 'languages',
        name: 'language-list',
        moduleId: './language-list/languages',
        nav: true,
        title: 'Languages'
      },
      {
        route: 'language/add',
        name: 'language-add',
        moduleId: './language-form/form',
        nav: false,
        title: 'Add Language'
      },
      {
        route: 'language/edit/:id',
        name: 'language-edit',
        moduleId: './language-form/form',
        nav: false,
        title: 'Edit Language'
      {
        route: 'tags',
        name: 'tags-list',
        moduleId: './tag-list/tags',
        nav: true,
        title: 'Tags'
      },
      {
        route: 'tag/add',
        name: 'tag-add',
        moduleId: './tag-form/form',
        nav: false,
        title: 'Add Tag'
      },
      {
        route: 'tag/edit/:id',
        name: 'tag-edit',
        moduleId: './tag-form/form',
        nav: false,
        title: 'Edit Tag'
      },
      {
        route: 'tag/view/:id',
        name: 'tag-view',
        moduleId: './tag-view/view',
        nav: false,
        title: 'View Tag'
      }
    ]);

    this.router = router;
  }
}
