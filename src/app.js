import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import 'highlight.js/styles/monokai_sublime.css!';

export class App {
  configureRouter(config, router) {
    config.title = 'Snipperino';
    config.map([
      {
        route: ['', 'snippets'],
        name: 'snippet-list',
        moduleId: './snippet/list/list',
        nav: true,
        title: 'Snippets'
      },
      {
        route: 'snippet/add',
        name: 'snippet-add',
        moduleId: './snippet/form/form',
        nav: false,
        title: 'Add Snippet'
      },
      {
        route: 'snippet/edit/:id',
        name: 'snippet-edit',
        moduleId: './snippet/form/form',
        nav: false,
        title: 'Edit Snippet'
      },
      {
        route: 'snippet/view/:id',
        name: 'snippet-view',
        moduleId: './snippet/view/view',
        nav: false,
        title: 'View Snippet'
      },
      {
        route: 'languages',
        name: 'language',
        moduleId: './language/language',
        nav: true,
        title: 'Languages'
      },
      {
        route: 'tags',
        name: 'tag',
        moduleId: './tag/tag',
        nav: true,
        title: 'Tags'
      }
    ]);

    this.router = router;
  }
}
