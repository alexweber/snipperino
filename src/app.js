import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Snipperino';
    config.map([
      {
        route: ['', 'snippets'],
        name: 'snippets',
        moduleId: './snippets/snippets',
        nav: true,
        title: 'Snippets'
      },
      {
        route: 'add',
        name: 'add',
        moduleId: './form/form',
        nav: true,
        title: 'Add Snippet'
      },
      {
        route: 'edit/:id',
        name: 'edit',
        moduleId: './form/form',
        nav: false,
        title: 'Edit Snippet'
      }
    ]);

    this.router = router;
  }
}
