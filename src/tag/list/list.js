import {Tag} from '../tag';

export class TagList {
  heading = 'Tags';
  tags = [];

  activate() {
    return Tag.all().then(tags => {
      this.tags = tags;
    }).catch(function (error) {
      console.error(error);
    });
  }
};
