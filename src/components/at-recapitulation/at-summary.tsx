import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'at-summary',
  styleUrl: 'at-summary.scss'
})
export class AtSummary {

  // Indicate that name should be a public property on the component
  @Prop() caption: boolean;
  @Prop() captionHeading: string;
  @Prop() heading: string;
  @Prop() type: string = 'default'; // default, info, example, warning

  @State() cHeading: string;

  render() {
    if (this.type == 'info') {this.cHeading = 'Info';}
    else if (this.type == 'example') {this.cHeading = 'Example';}
    else if (this.type == 'warning') {this.cHeading = 'Warning';}

    return (
      <div class={'at-summary at-summary-'+this.type}>
      <slot></slot>
      </div>
    );
  }
}
