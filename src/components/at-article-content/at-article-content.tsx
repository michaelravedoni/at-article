import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'at-article-content',
  styleUrl: 'at-article-content.scss'
})
export class AtArticleContent {

  // Indicate that name should be a public property on the component
  @Prop() class: string = 'at-article-content';
  @Prop() id: string = 'at-article-content';

  square() {
    var last = document.querySelector('at-article-content div').lastElementChild as Element;
    var e = document.createElement('span');
    e.setAttribute('class', 'at-article-content-end');
    e.innerHTML = ' ◼';
    last.insertAdjacentElement('beforeend', e);
  }
  componentDidLoad() {
    this.square()
  }

  render() {
    return (
      <div id={this.id} class={this.class}>
      <slot></slot>
      </div>
    );
  }
}
