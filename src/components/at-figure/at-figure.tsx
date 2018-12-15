import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'at-figure',
  styleUrl: 'at-figure.scss'
})
export class AtFigure {

  // Indicate that name should be a public property on the component
  @Prop() src: string;
  @Prop() href: string;
  @Prop() fullwidth: boolean;
  @Prop() title: string;
  @Prop() caption: string;
  @Prop() doi: string;
  @Prop() numbering: boolean;
  @Prop() credit: string; // Include a credit line. If you have obtained permission to use the photograph, you should indicate this in the caption. Write a line after the full citation in your caption indicating who owns the photograph and that you have their permission to use it. For example: Fig. 1. Reginald Pepper, Still Life with Haddock. 1919, black and white photographic print. The Estate of B. Wooster. From: B. Wooster, Pepper’s Pictures. London: Faux Publications, 1932. Pl. 275. Copyright 1932 by the Estate of B. Wooster. Reprinted with permission.
  @Prop() citation: string;

  render() {
    return (
      <figure>
        <a href={this.href ? this.href : '#0'}>
          <img src={this.src} alt={this.title} title={this.title} class={this.fullwidth ? 'at-figure-fullwidth' : 'at-figure-no-fullwidth'} />
        </a>
        <figcaption class="at-figure-caption">
          {this.numbering ? <span class="at-figure-caption-numbering">Figure </span> : null}{this.numbering ? ' ' : null}
          {this.caption ? <span class="at-figure-caption-title">{this.caption}</span> : null}{this.caption ? ' ' : null}
          <span class="at-figure-caption-text">
            <slot></slot>
            {this.credit ? <small class="at-figure-caption-credit"> {this.credit}</small> : null}
            {this.doi ? <small class="at-figure-caption-doi"> DOI: <a href={this.doi}>{this.doi}</a></small> : null}
          </span>
        </figcaption>
      </figure>
    );
  }
}
