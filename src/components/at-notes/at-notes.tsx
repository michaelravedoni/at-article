import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'at-notes',
  styleUrl: 'at-notes.scss'
})
export class AtNotes {

  // Indicate that name should be a public property on the component
  @Prop() heading: string = 'Notes';

  @State() notes: any[] = [];


  notesFind() {
    // Fetch all default and foot note type.
    // Create a note object list
    var notesNodesList = document.querySelectorAll('at-note .at-note-default, at-note .at-note-foot');
    let notesList = [];
    for ( var step = 0; step < notesNodesList.length; step++ ) {
      var noteIndex = step+1;
      //notesList.push({index:citIndex, content:notesNodesList[i].innerHTML, type: notesNodesList[i].parentElement.getAttribute('type')});
      notesList = [...notesList, {index: noteIndex, type: notesNodesList[step].getAttribute('type'), content: notesNodesList[step].innerHTML, element: notesNodesList[step] }]
    }
    this.notes = notesList;
  }

  notesMake() {
    // Add an id on all default and foot note type.
    // So we can link it with the footnotes section
    var noteslist = this.notes;
    for ( var step = 0; step < noteslist.length; step++ ) {
      let note = noteslist[step];
      //console.log(note);
      let parent = note.element.parentElement;
      //console.log(parent);
      let noteNumber = parent.querySelector('.at-note-number');
      let noteIndex = step+1;
      noteNumber.setAttribute('id', 'cite_note_ref-'+noteIndex);
      if (parent.hasAttribute('type')) {
        parent.querySelector('.at-note-number').setAttribute('href', '#cite_note-'+noteIndex);
      }
    }
  }
  componentWillLoad(){
    this.notesFind();
    document.addEventListener('noteRendered', this.notesFind.bind(this), false);
    document.addEventListener('noteRendered', this.notesMake.bind(this), false);
  }
  componentDidLoad() {
    //this.notesMake();
  }

  render() {
    if(this.notes.length > 0){
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
