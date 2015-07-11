import {Tag} from '../tag';

export class TagList {
  tags = [];

  activate() {
    return Tag.all().then(tags => {
      this.tags = tags;
    }).catch(function (error) {
      console.error(error);
    });
  }
};
