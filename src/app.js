import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import 'highlight.js/styles/monokai_sublime.css!';

export class App {
  configureRouter(config, router) {
    config.title = 'Snipperino';
    config.map([
      {
        route: '',
        name: 'home',
        moduleId: './home/home',
        nav: false,
        title: 'Home'
      },
      {
        route: 'snippets',
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
      },
      {
        route: 'settings',
        name: 'settings',
        moduleId: './settings/settings',
        nav: true,
        title: 'Settings'
      }
    ]);

    this.router = router;
  }
}
