import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import 'highlight.js/styles/monokai_sublime.css!';

export class App {
  configureRouter(config, router) {
    config.title = 'Snipperino';
    config.map([
      {
        route: ['', 'snippets'],
        name: 'snippet',
        moduleId: './snippet/snippet',
        nav: true,
        title: 'Snippets'
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
