import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'at-blockquote',
  styleUrl: 'at-blockquote.scss'
})
export class AtBlock {

  // Indicate that name should be a public property on the component
  @Prop() author: string;
  @Prop() source: string;
  @Prop() citation: string;
  @Prop() locator: string;
  @Prop() locatorPrefix: string = "";
  @Prop() type: string = 'default'; // default, inline, locator

  render() {
    if (this.type == 'default') {
      return (
        <figure class={'at-blockquote-default at-blockquote-default'}>
         <blockquote class="at-blockquote-default-content">
          <slot></slot>
         </blockquote>
         {this.author || this.source ? (<figcaption class="at-blockquote-default-caption">
           {this.author && this.source ? (<span>{this.author}<br /><cite>{this.source}</cite></span>) : (null)}
           {this.author && !this.source ? (<span>{this.author}</span>) : (null)}
           {!this.author && this.source ? (<span><cite>{this.source}</cite></span>) : (null)}
          </figcaption>) : (null)}
        </figure>
      );
    }
    else if (this.type == 'locator') {
      return (
        <div class="at-blockquote-locator" itemprop="hasCitation" itemscope itemtype="http://schema.org/Citation">
          {this.locator ? (<div class="at-blockquote-locator-number" itemprop="pageNumber" title={"Localization: "+this.locatorPrefix+ this.locator}>[{this.locatorPrefix}{this.locator}]</div>) : (null)}
          <div class="at-blockquote-locator-content" itemprop="citeText"><slot></slot></div>
          {this.author || this.source ? (<div class="at-blockquote-locator-caption">
            {this.author && this.source ? (<span>– {this.author}<br /><cite>{this.source}</cite></span>) : (null)}
            {this.author && !this.source ? (<span>– {this.author}</span>) : (null)}
            {!this.author && this.source ? (<span>– <cite>{this.source}</cite></span>) : (null)}
           </div>) : (null)}
        </div>
      );
    }
  }
}
