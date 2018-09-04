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

  componentDidLoad() {
    //console.log('at-article did load');
  }

  render() {
    return (
      <article id={this.id} class={'at-article-theme-'+this.theme}>
        <div class="at-article-container">
          {this.toc ? (<at-toc></at-toc>) : (null)}
          {this.control ? (<at-control></at-control>) : (null)}
          <slot></slot>
        </div>
      </article>
    );
  }
}
