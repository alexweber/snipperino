import models from '../db/models';

export class Tag {
  configureRouter(config, router) {
    config.map([
      {
        route: '',
        name: 'tag-list',
        moduleId: './list/list',
        nav: true,
        title: 'All'
      },
      {
        route: 'add',
        name: 'tag-add',
        moduleId: './form/form',
        nav: true,
        title: 'Add'
      },
      {
        route: 'edit/:id',
        name: 'tag-edit',
        moduleId: './form/form',
        nav: false,
        title: 'Edit'
      },
      {
        route: 'view/:id',
        name: 'tag-view',
        moduleId: './view/view',
        nav: false,
        title: 'View'
      }
    ]);

    this.router = router;
  }

  /**
   * Returns all tags.
   *
   * @return {Promise} A promise for an array of tag plain objects.
   */
  static all() {
    // @TODO pagination
    return models.Tag.forge().fetchAll().then(results => {
      let tags = [];
      if (results.length) {
        results.models.forEach(item => {
          tags.push(item.attributes);
        });
      }
      return tags;
    });
  }

  static load(id) {
    return models.Tag.forge({ id: id }).fetch().then(tag => {
      return tag ? tag.attributes : tag;
    });
  }

  static save(data={}) {
    return models.Tag.forge(data).save();
  }

  /**
   * Deletes a tag.
   *
   * @param  {int} id The tag id.
   * @return {Promise} A promise with the result of the delete operation.
   */
  static delete(id) {
    return models.Tag.forge({ id: id }).fetch().then(tag => {
      return tag.destroy();
    });
  }
}
