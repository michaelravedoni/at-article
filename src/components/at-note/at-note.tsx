import { Component, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'at-note',
  styleUrl: 'at-note.scss'
})
export class AtNote {

  // Indicate that name should be a public property on the component
  @Prop() type: string = 'default'; // inline, foot, aside

  @State() artificialId: string;

  @Event() noteRendered: EventEmitter;

  componentDidLoad() {
    this.noteRendered.emit();
  }

  idGenerator() {
      return 'note-' + Math.random().toString(36).substr(2, 16);
  }

  render() {
    this.artificialId = this.idGenerator();
    if(this.type == 'default'){
      return [
        <label htmlFor={this.artificialId} class="at-note-toggle at-note-number"></label>,
        <input type="checkbox" id={this.artificialId} class="at-note-toggle"/>,
        <div class="at-note at-note-default"><slot></slot></div>
      ];
    }
    else if(this.type == 'foot'){
      return [
        <a class="at-note-number"></a>,
        <span class="at-note at-note-foot"><slot></slot></span>
      ];
    }
    else if(this.type == 'margin'){
      return [
        <label htmlFor={this.artificialId} class="at-note-toggle">⊕</label>,
        <input type="checkbox" id={this.artificialId} class="at-note-toggle"/>,
        <aside class="at-note at-note-margin"><slot></slot></aside>
      ];
    }
  }
}
