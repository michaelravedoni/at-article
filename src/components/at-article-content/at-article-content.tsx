import { Component } from '@stencil/core';

@Component({
  tag: 'at-article-content',
  styleUrl: 'at-article-content.scss'
})
export class AtArticleContent {

  square() {
    var content = document.querySelector('.at-article-content');
    var lastParagraph = document.querySelector('.at-article-content p:last-child');
    var last = content.lastElementChild;
    var e = document.createElement('span');
    e.setAttribute('class', 'at-article-content-end');
    e.innerHTML = '&nbsp;◼';
    if (last.tagName == 'P') {
      console.log(last);
      last.insertAdjacentElement('beforeend', e);
    }
    else {
      content.appendChild(e);
    }
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
