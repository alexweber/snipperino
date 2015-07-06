import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Snipperino';
    config.map([
      {
        route: ['','welcome'],
        name: 'welcome',
        moduleId: './welcome/welcome',
        nav: true,
        title: 'Welcome'
      },
      {
        route: 'snippets',
        name: 'snippets',
        moduleId: './snippets/snippets',
        nav: true,
        title: 'Snippets'
      }
    ]);

    this.router = router;
  }
}
