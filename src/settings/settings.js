import models from '../db/models';

export class SnipperinoSettings {
  settings = {};

  activate() {
    SnipperinoSettings.all().then(settings => {
      this.settings = settings;
    });
  }

  /**
   * Loads all settings from the database.
   *
   * @return {Promise} A promise for a plain object containing setting key-value pairs.
   */
  static all() {
    return models.Settings.forge().fetchAll().then(results => {
      let settings = {};
      if (results.length) {
        // @TODO loop and assign
      }
      return settings;
    });
  }
}
