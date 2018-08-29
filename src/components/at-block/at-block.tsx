import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'at-block',
  styleUrl: 'at-block.scss'
})
export class AtBlock {

  // Indicate that name should be a public property on the component
  @Prop() caption: boolean;
  @Prop() captionHeading: string;
  @Prop() heading: string;
  @Prop() type: string = 'default'; // default, info, example, warning, definition, fact

  @State() cHeading: string;

  render() {
    if (this.type == 'info') {this.cHeading = 'Info';}
    else if (this.type == 'example') {this.cHeading = 'Example';}
    else if (this.type == 'warning') {this.cHeading = 'Warning';}
    else if (this.type == 'definition') {this.cHeading = 'Definition';}
    else if (this.type == 'fact') {this.cHeading = 'Fact';}

    return (
      <div class={'at-article-block at-article-block-'+this.type}>

      {this.caption ? (<div class="at-article-block-caption">{this.cHeading}<span class="at-article-block-caption-number"></span></div>) : (null)}
      {this.heading ? (<div class="at-article-block-title">{this.heading}</div>) : (null)}
      <slot></slot>
      </div>
    );
  }
}
