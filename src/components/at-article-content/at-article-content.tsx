import { Component } from '@stencil/core';

@Component({
  tag: 'at-article-content',
  styleUrl: 'at-article-content.scss'
})
export class AtArticleContent {

  square() {
    var last = document.querySelector('at-article-content').lastElementChild as Element;
    var e = document.createElement('span');
    e.setAttribute('class', 'at-article-content-end');
    e.innerHTML = '&nbsp;◼';
    last.insertAdjacentElement('beforeend', e);
  }
  componentDidLoad() {
    this.square()
  }

  render() {
    return (
      <div class="at-article-content">
      <slot></slot>
      </div>
    );
  }
}
