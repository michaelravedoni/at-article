import { Component, Prop, State, Element } from '@stencil/core';
import tippy from 'tippy.js';


@Component({
  tag: 'at-references',
  styleUrl: 'at-references.scss'
})
export class AtReferences {

  @Element() el: HTMLStencilElement;

  @Prop() fullwidth: boolean;
  @Prop() heading: string = 'References';
  @Prop({mutable: true}) referencesFinded: boolean = false;

  @State() references: any[] = [];
  @State() citations: Array<any> = [];

  // Update the references list. Create an aray of all <at-reference> tags presents in the document.
  referencesUpdate(e) {
    //console.log("this.referencesUpdate() start");
    //console.log(e);
    var referencesNodesList = document.querySelectorAll('at-reference:not([type="inline"]):not([type="bibliography"]):not([type="references"])');
    let referencesList = [];
    for ( var step = 0; step < referencesNodesList.length; step++ ) {
      var refIndex = step+1;
      var refProps = {};
      var refElementAttributes = referencesNodesList[step].attributes;
      for (var step2 = 0; step2 < refElementAttributes.length; step2++) {
        var attribute = refElementAttributes[step2];
        refProps[attribute.name] = attribute.value;
      }
      referencesList = [...referencesList, {index: refIndex, key: referencesNodesList[step].getAttribute('key'), props: refProps, element: referencesNodesList[step], citations: [] }]
    }
    this.references = referencesList;

    //console.log(this.references);
    //console.log("this.referencesUpdate() finished");
  }

  // From the references array, transform the <at-reference> component with a link in the <at-references> section
  referencesMake() {
    //console.log("this.referencesMake() start");
    var refslist = this.references;
    for ( var step = 0; step < refslist.length; step++ ) {
      var refIndex = step+1;
      var refKey = refslist[step].key;
      var refType = refslist[step].props.type;
      if (refType == 'a-d') {
        var refNumber = refslist[step].element.querySelector('a');
        if (refNumber) {
          refNumber.setAttribute('href', '#cite_ref-'+refKey);
          refNumber.setAttribute('id', 'cite_reference_ref-'+refKey);
        }
      } else {
        var refNumber = refslist[step].element.querySelector('a');
        //console.log(refNumber);
        if (refNumber) {
          refNumber.setAttribute('href', '#cite_ref-'+refKey);
          refNumber.setAttribute('id', 'cite_reference_ref-'+refKey);
          refNumber.innerHTML = refIndex;
          refNumber.className = 'at-reference-cite';
        }
      }
    }
    //console.log("this.referencesMake() finished");
  }

  // Find the citations <at-citation> tags. Create an aray of all <at-citation> tags presents in the document.
  citationsFind() {
    //To do: update on event https://auth0.com/blog/creating-web-components-with-stencil/
    //console.log("this.citationsFind() start");
    var citationsNodesList = document.querySelectorAll('at-citation');
    var citationsList = [];
    var j = 0;
    for( j=0; j < citationsNodesList.length; j++ ) {
      let citIndex = j+1;
      var citProps = {};
      let attrCite = citationsNodesList[j].attributes;
      for (var att in attrCite){
        citProps[attrCite[att].name] = attrCite[att].value;
      }
      citationsList = [...citationsList, {index: citIndex, key: citationsNodesList[j].getAttribute('key'), props: citProps, element: citationsNodesList[j]}]
    }
    this.citations = citationsList;
    //console.log(this.citations);
    //console.log("this.citationsFind() finished");
  }
  // From the citations array, transform the <at-citation> component with a link in the <at-references> section
  citationsMake() {
    //console.log("this.citationsMake() start");
    for (var ref in this.references) {
      let indexRef = this.references[ref].index;
      let keyRef = this.references[ref].key;

      var i = 0;
      for (var cit in this.citations) {
        let keyCit = this.citations[cit].key;
        let numberCit = this.citations[cit].element.querySelector('.at-citation-number');
        let aCit = this.citations[cit].element.querySelector('.at-citation-content a');
        let idCit = this.citations[cit].element.querySelector('span');
        //let idCiteRef = document.querySelector('at-references #cite_ref-'+keyRef);
        if (keyCit == keyRef) {
          //console.log("this.citationsMake(): match");
          //console.log(keyCit, keyRef);
          if (numberCit) {
            numberCit.innerHTML = indexRef;
            aCit.setAttribute('href', '#cite_ref-'+keyCit);
            idCit.setAttribute('id', 'cite_ref-'+keyCit +'-'+ cit);
            // Fill the references aray with the citations related to the reference loop
            this.references[ref].citations[i] = {...this.references[ref].citations[i], indexRef: indexRef, key: keyCit, id: 'cite_ref-'+keyCit +'-'+ cit, href: '#cite_ref-'+keyCit};
            //this.references[ref].citations[i] = {indexRef: indexRef, key: keyCit, id: 'cite_ref-'+keyCit +'-'+ cit, href: '#cite_ref-'+indexRef};
            i = i+1;

            //let itemBacklinks = idCiteRef.querySelector('.at-references-item-backlinks');
            /*if (itemBacklinks !== undefined) {
              let itemBacklinksCitations = idCiteRef.querySelector('at-references-item-backlink-citations');
              var refCitations = this.references[ref].citations;
              console.log("refCitations");
              console.log(refCitations);
              itemBacklinksCitations.innerHTML = "";
              idCiteRef.setAttribute('data-citation-ref-'+cit, '#cite_ref-'+keyCit +'-'+ cit+1);
              for (var back in refCitations) {
                itemBacklinksCitations.insertAdjacentHTML('beforeend', '<a class="at-references-item-backlink" href="'+refCitations[back].id+'">&#8593;</a>&#160;')
              }
            }*/
          }
        }
      }
    }
    //console.log("this.citationsMake() finished");
  }

  //To do: add tooltip on the <at-reference> tag when displayed in the <at-references> section
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

  componentWillLoad() {
    this.citationsFind();
    document.addEventListener('referenceRendered', this.referencesUpdate.bind(this), false);
    document.addEventListener('referenceRendered', this.referencesMake.bind(this), false);
    document.addEventListener('referenceRendered', this.citationsMake.bind(this), false);
    document.addEventListener('citationRendered', this.citationsMake.bind(this), false);
    //console.log('at-references will render');
  }
  componentDidLoad() {
    //console.log('at-references has been rendered');
  }
  componentWillUpdate() {
    //console.log('at-references will update and re-render');
  }
  componentDidUpdate() {
    //console.log('at-references did update');
  }

  render() {
    if (this.references.length > 0) {
      //console.log("at-references: render");
      return (
        <div id="at-references" class="at-references">
        <h2>{this.heading}</h2>
        <ol>
        {this.references.map((reference, i) => {
          return (<li id={'cite_ref-'+reference.key} class="at-references-item">
            <span class="at-references-item-index">R{reference.index}.</span>&#160;
              {this.references[i].citations.length > 0 ? (
                <span class="at-references-item-backlinks">
                  <a class="at-references-item-backlink at-references-item-backlinks-reference" href={'#cite_reference_ref-'+reference.key}>&#8593;</a>
                    {this.references[i].citations.map(cit => {return(<a class="at-references-item-backlink at-references-item-backlinks-citation" href={'#'+cit.id}>↑</a>)})}
                </span>
              ) : (<a class="at-references-item-backlink-reference" href={'#cite_reference_ref-'+reference.key}>↑</a> )}
            <at-reference type="references" key={reference.key} itemType={reference.props.itemType} title={reference.props.title} creator={reference.props.creator} date={reference.props.date} publisher={reference.props.publisher} place={reference.props.place} numPages={reference.props.numPages} volume={reference.props.volume} issue={reference.props.issue} pages={reference.props.pages} chapter={reference.props.chapter} language={reference.props.language} isbn={reference.props.isbn} doi={reference.props.doi} issn={reference.props.issn} pmid={reference.props.pmid} url={reference.props.url}></at-reference>
          </li>)
        }
        )}
        </ol>
        <slot></slot>
        </div>
      );
    }
  }
}
