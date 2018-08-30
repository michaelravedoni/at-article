import { Component, Prop, State } from '@stencil/core';
import tippy from 'tippy.js';


@Component({
  tag: 'at-references',
  styleUrl: 'at-references.scss'
})
export class AtReferences {

  // Indicate that name should be a public property on the component
  @Prop() fullwidth: boolean;
  @Prop() type: string = 'default'; // default, foot, aside
  @Prop() heading: string = 'References';

  @State() references: Array<any> = [];
  @State() citations: Array<any> = [];
  public referencesList : Array<any> = [];
  public citationsList : Array<any> = [];

  /*
  arabicToLetters(num) {
    var letters = "";
    while (num > 0) {
      num--;
      letters = String.fromCharCode(97 + (num % 26)) + letters;
      num = Math.floor(num / 26);
    }
    return letters;
  }
  */

  tooltip() {
    const tooltipNodesList = document.querySelectorAll('.at-reference-cite, .at-reference-a-d');
    let i = 0;
    for( i=0; i < tooltipNodesList.length; i++ ) {
      //tooltipNodesList[i].setAttribute('title', 'test');
      //let data = this.references[i].data
      let index = i+1
      let templateR = document.querySelector('#cite_ref-'+ index +' at-reference');
      let template = templateR.cloneNode(true);
      tippy(tooltipNodesList[i], {
        html: template,
        interactive: true,
        arrow: true,
        arrowType: 'sharp',
        theme: 'at',
      });
    }
  }

  cite() {
    var referencesNodesList = document.querySelectorAll('at-reference .at-reference-is-referenced');
    let i = 0;
    for( i=0; i < referencesNodesList.length; i++ ) {
      let index = i+1;
      var data={};
      var reEl = atts = referencesNodesList[i].parentNode as HTMLElement;
      for (var att, k = 0, atts = reEl.attributes, n = atts.length; k < n; k++){
        att = atts[k];
        data[att.nodeName] = att.nodeValue;
      }
      this.referencesList.push({index:index, data:data, content:referencesNodesList[i].innerHTML, type: referencesNodesList[i].parentElement.getAttribute('type'), key: referencesNodesList[i].getAttribute('data-at-ref-key')});
    }
    this.references = this.referencesList;
    console.log("this.references");
    console.log(this.references);

    for( i=0; i < referencesNodesList.length; i++ ) {
      let index = i+1;
      let parent = referencesNodesList[i].parentElement;
      //let refKey = referencesNodesList[i].getAttribute('data-at-ref-key');
      let typeAtt = parent.getAttribute('type');
      if (typeAtt == 'a-d' || typeAtt == 'author-date') {
        referencesNodesList[i].querySelector('a').setAttribute('href', '#cite_ref-'+index);
        referencesNodesList[i].querySelector('a').setAttribute('id', 'cite_reference_ref-'+index);
      } else {
        let number = referencesNodesList[i].querySelector('.at-reference-number');
        //let span = document.createElement('span');
        number.innerHTML = '<a href="#cite_ref-'+ index +'">'+ index +'</a>';
        number.className = 'at-reference-cite';
        number.setAttribute('id', 'cite_reference_ref-'+index);
        //referencesNodesList[i].parentNode.insertBefore(span, referencesNodesList[i]);
      }
    }
  }
  citationsMake() {
    var citationsNodesList = document.querySelectorAll('at-citation');
    let j = 0;
    for( j=0; j < citationsNodesList.length; j++ ) {
      let index = j+1;
      var data={};
      let attrCite = citationsNodesList[j].attributes;
      for (var att in attrCite){
        data[attrCite[att].name] = attrCite[att].value;
      }
      this.citationsList.push({index:index, data:data, content:citationsNodesList[j].innerHTML, key: citationsNodesList[j].getAttribute('key')});
    }
    this.citations = this.citationsList;
    console.log("this.citations");
    console.log(this.citationsList);

    for(var ref in this.references) {
      let indexRef = this.references[ref].index;
      let keyRef = this.references[ref].key;
      for (var cit in this.citations) {
        let keyCit = this.citations[cit].key;
        let numberCit = citationsNodesList[cit].querySelector('.at-citation-number');
        let aCit = citationsNodesList[cit].querySelector('.at-citation-content a');
        let idCit = citationsNodesList[cit].querySelector('span');
        let idCiteRef = document.querySelector('at-references #cite_ref-'+indexRef);
        if (keyCit == keyRef) {
          numberCit.innerHTML = indexRef;
          aCit.setAttribute('href', '#cite_ref-'+indexRef);
          idCit.setAttribute('id', 'cite_ref-'+keyCit +'-'+ cit);

          idCiteRef.setAttribute('data-citation-ref-'+cit, '#cite_ref-'+keyCit +'-'+ cit+1);
          idCiteRef.querySelector('.at-references-item-backlinks').insertAdjacentHTML('beforeend', '<a class="at-references-item-backlink" href="#cite_ref-'+keyCit +'-'+ cit+'">&#8593;</a>&#160;');
        }
      }
    }
  }
  componentWillLoad() {
    this.cite();
  }
  componentDidLoad() {
    this.tooltip();
    this.citationsMake();
  }

  render() {
    if(this.type == 'default' && this.references.length > 0){
      return (
        <div id="at-references" class="at-references">
        <h2>{this.heading}</h2>
        <ol>
        {this.references.map((reference) =>
          <li id={'cite_ref-'+reference.index} class="at-references-item">
            <span class="at-references-item-index">R{reference.index}.</span>&#160;
            <span class="at-references-item-backlinks">
              <a class="at-references-item-backlink" href={'#cite_reference_ref-'+reference.index}>&#8593;</a>&#160;
            </span>
            <at-reference type="references" key={reference.data.key} itemType={reference.data.itemType} title={reference.data.title} creator={reference.data.creator} date={reference.data.date} publisher={reference.data.publisher} place={reference.data.place} numPages={reference.data.numPages} volume={reference.data.volume} issue={reference.data.issue} pages={reference.data.pages} chapter={reference.data.chapter} language={reference.data.language} isbn={reference.data.isbn} doi={reference.data.doi} issn={reference.data.issn} pmid={reference.data.pmid} url={reference.data.url}></at-reference>
          </li>
        )}
        </ol>
        </div>
      );
    }
  }
}
