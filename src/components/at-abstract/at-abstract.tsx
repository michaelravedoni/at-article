import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'at-abstract',
  styleUrl: 'at-abstract.scss'
})
export class AtAbstract {

  // Indicate that name should be a public property on the component
  @Prop() type: string = 'default';
  @Prop() heading: string = '';

  render() {

    return (
      <div class={'at-abstract at-abstract-'+this.type}>
        {this.heading ? (<div class="at-abstract-heading">{this.heading}</div>) : (null)}
        <slot></slot>
      </div>
    );
  }
}
