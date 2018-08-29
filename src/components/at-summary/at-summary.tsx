import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'at-summary',
  styleUrl: 'at-summary.scss'
})
export class AtSummary {

  // Indicate that name should be a public property on the component
  @Prop() type: string = 'default';
  @Prop() heading: string = 'Summary';

  render() {

    return (
      <div class={'at-summary at-summary-'+this.type}>
        {this.heading ? (<div class="at-summary-heading">{this.heading}</div>) : (null)}
        <slot></slot>
      </div>
    );
  }
}
