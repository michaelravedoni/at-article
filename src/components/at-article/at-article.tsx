import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'at-article',
  styleUrl: 'at-article.scss'
})
export class AtArticle {

  // Indicate that name should be a public property on the component
  @Prop() class: string = 'at-article';
  @Prop() id: string = 'at-article';
  @Prop() author: string;
  @Prop() pubDate: string;
  @Prop() type: string;

  render() {
    return (
      <article id={this.id} class={this.class}>
      <slot></slot>
      </article>
    );
  }
}
