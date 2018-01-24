import { Component, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'at-notes',
  styleUrl: 'at-notes.scss'
})
export class AtNotes {

  // Indicate that name should be a public property on the component
  @Prop() fullwidth: boolean;
  @Prop() type: string = 'default'; // default, foot, aside
  @Prop() heading: string = 'Notes';

  @State() notes: Array<any> = [];
  public notesList : Array<any> = [];


  cite() {
    // Fetch all default and foot note type.
    // Create a note object list
    var notesNodesList = document.querySelectorAll('at-note .at-note-default, at-note .at-note-foot');
    let i = 0;
    for( i=0; i < notesNodesList.length; i++ ) {
      this.notesList.push({index:i+1, content:notesNodesList[i].innerHTML, type: notesNodesList[i].parentElement.getAttribute('type')});
    }
    this.notes = this.notesList;

    // Add an id on all default and foot note type.
    // So we can link it with the footnotes section
    for( i=0; i < notesNodesList.length; i++ ) {
      let parent = notesNodesList[i].parentElement;
      let index = i+1;
      parent.querySelector('.at-note-number').setAttribute('id', 'cite_note_ref-'+index);
      //console.log(parent.querySelector('.at-note-number'));
      if (parent.hasAttribute('type')) {
        parent.querySelector('.at-note-number').setAttribute('href', '#cite_note-'+index);
      }
    }

    /*
    // Add a link and a id on all note type.
    for( i=0; i < notesNodesList.length; i++ ) {
      let span = document.createElement('span');
      let index = i+1;
      span.innerHTML = '[<a href="#cite_note-'+ index +'">'+ index +'</a>]';
      span.className = 'at-note-cite';
      span.setAttribute('id', 'cite_note_ref-'+index);
      notesNodesList[i].parentNode.insertBefore(span, notesNodesList[i]);
    }
    */
  }
  componentDidLoad() {
    this.cite();
  }

  render() {
    if(this.type == 'default'){
      return (
        <div id="at-notes" class="at-notes">
        <h2>{this.heading}</h2>
        <ol>
        {this.notes.map((note) =>
          <li class="at-notes-item"><span id={'cite_note-'+note.index} class="at-notes-item-index"></span><span class="at-notes-item-content" innerHTML={note.content}></span>&#160;<a class="at-notes-item-backlink" href={'#cite_note_ref-'+note.index}>&#8617;</a></li>
        )}
        </ol>
        </div>
      );
    }
  }
}
