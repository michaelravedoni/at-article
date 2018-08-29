import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'at-article',
  styleUrl: 'at-article.scss'
})
export class AtArticle {

  // Indicate that name should be a public property on the component
  @Prop() id: string = 'at-article';
  @Prop() theme: string = 'default';
  @Prop() toc: boolean = false;
  @Prop() control: boolean = false;

  render() {
    return (
      <article id={this.id} class={'at-article-theme-'+this.theme}>
        {this.toc ? (<at-toc></at-toc>) : (null)}
        {this.control ? (<at-control></at-control>) : (null)}
        <slot></slot>
      </article>
    );
  }
}
