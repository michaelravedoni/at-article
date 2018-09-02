import { Component, Prop, State, Element, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'at-citation',
  styleUrl: 'at-citation.scss'
})
export class AtCitation {

  @Element() atCitationEl: HTMLElement;

  // Indicate that name should be a public property on the component
  @Prop() key: string;
  @Prop() locator: string;
  @Prop() label: string;
  @Prop() pref: string;
  @Prop() suffix: string;
  @Prop() suppressAuthor: boolean;
  @Prop() authorOnly: boolean;

  @State() siblingNext:boolean;
  @State() siblingPrev:boolean;

  @Event() citationRendered: EventEmitter;

  isNextSibling(element) {
      return ("nodeType" in element && element.nodeType === 1 && element.nextSibling !== null && element.nextSibling.nodeType === 1);
  }
  isPrevSibling(element) {
      return ("nodeType" in element && element.nodeType === 1 && element.previousSibling !== null && element.previousSibling.nodeType === 1);
  }
  componentDidLoad() {
    this.siblingNext = this.isNextSibling(this.atCitationEl);
    this.siblingPrev = this.isPrevSibling(this.atCitationEl);
    this.citationRendered.emit();
  }

  render() {

      return (
        <span class="at-citation" data-at-ref-key={this.key} id={'#cite_ref-'+this.key}>
          {this.siblingPrev == false && this.siblingNext == true ? (<span class="at-citations-open"></span>): null}
          {this.siblingPrev == false && this.siblingNext == false ? (<span class="at-citations-open"></span>): null}
          {this.siblingPrev == true ? (<span class="at-citation-delimiter"></span>): null}
          <span class="at-citation-content">{this.pref ? this.pref : null}<a href={'#cite_ref-'+this.key}><span class="at-citation-number">{this.key}</span></a>{this.locator ? (this.label ? ', ' +this.label+this.locator: ', ' +this.locator) : (null)}{this.suffix ? this.suffix : null}</span>
          {this.siblingPrev == true && this.siblingNext == false ? (<span class="at-citations-close"></span>): null}
          {this.siblingPrev == false && this.siblingNext == false ? (<span class="at-citations-close"></span>): null}
        </span>
      );
  }
}
