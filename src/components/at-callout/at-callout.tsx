import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'at-callout',
  styleUrl: 'at-callout.scss'
})
export class AtCallout {

  // Indicate that name should be a public property on the component
  @Prop() heading: string;
  @Prop() type: string = 'inline'; // default, inline, block

  @State() cHeading: string;

  render() {
    if (this.type == 'inline') {
      return (
        <div class={'at-article-callout at-article-callout-'+this.type}>
          &#10532; <slot></slot>
        </div>
      );
    } else {
      return (
        <div class={'at-article-callout at-article-callout-'+this.type}>
        {this.heading ? (<div class="at-article-callout-block-title">{this.heading}</div>) : (null)}
        <div class="at-article-callout-block-icon">&#10532;</div><div class="at-article-callout-block-content"><slot></slot></div>
        </div>
      );
    }
  }
}
