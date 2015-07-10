import {inject, customAttribute} from 'aurelia-framework';
import highlight from 'highlight.js';

@customAttribute('highlight')
@inject(Element)
export class Highlight {
  constructor(element) {
    this.element = element;
  }

  valueChanged(newValue) {
    this.element.classList.add(newValue);
    highlight.highlightBlock(this.element);
  }
}
