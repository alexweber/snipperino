import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Snipperino';
    config.map([
      {
        route: ['','welcome'],
        name: 'welcome',
        moduleId: './welcome',
        nav: true,
        title: 'Welcome'
      },
      {
        route: 'snippets',
        name: 'snippets',
        moduleId: './snippets',
        nav: true,
        title: 'Snippets'
      }
    ]);

    this.router = router;
  }
}
