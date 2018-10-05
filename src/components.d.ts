/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
/* tslint:disable */

import '@stencil/core';




declare global {
  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}

  namespace StencilComponents {

    interface AtAbstract {
      'heading': string;
      'type': string;
    }

    interface AtArticleContent {

    }

    interface AtArticle {
      'control': boolean;
      'id': string;
      'theme': string;
      'toc': boolean;
    }

    interface AtBlock {
      'caption': boolean;
      'heading': string;
      'type': string;
    }

    interface AtBlockquote {
      'author': string;
      'citation': string;
      'label': string;
      'locator': string;
      'source': string;
      'type': string;
    }

    interface AtCallout {
      'heading': string;
      'type': string;
    }

    interface AtCitation {
      'authorOnly': boolean;
      'key': string;
      'label': string;
      'locator': string;
      'pref': string;
      'suffix': string;
      'suppressAuthor': boolean;
    }

    interface AtControl {
      'content': string;
    }

    interface AtFigure {
      'caption': string;
      'citation': string;
      'credit': string;
      'doi': string;
      'fullwidth': boolean;
      'href': string;
      'numbering': boolean;
      'src': string;
      'title': string;
    }

    interface AtNote {
      'type': string;
    }

    interface AtNotes {
      'heading': string;
    }

    interface AtReference {
      'callNumber': string;
      'chapter': string;
      'creator': string;
      'creatorSummary': string;
      'creators': Object;
      'date': string;
      'dateAdded': string;
      'doi': string;
      'isbn': string;
      'issn': string;
      'issue': string;
      'itemType': string;
      'key': string;
      'language': string;
      'numPages': string;
      'pages': string;
      'parsedDate': string;
      'place': string;
      'pmid': string;
      'publisher': string;
      'title': string;
      'type': string;
      'url': string;
      'volume': string;
    }

    interface AtReferences {
      'fullwidth': boolean;
      'heading': string;
      'referencesFinded': boolean;
    }

    interface AtResume {
      'caption': boolean;
      'captionHeading': string;
      'heading': string;
      'type': string;
    }

    interface AtSummary {
      'heading': string;
      'type': string;
    }

    interface AtToc {

    }
  }


    interface HTMLAtAbstractElement extends StencilComponents.AtAbstract, HTMLStencilElement {}

    var HTMLAtAbstractElement: {
      prototype: HTMLAtAbstractElement;
      new (): HTMLAtAbstractElement;
    };
    

    interface HTMLAtArticleContentElement extends StencilComponents.AtArticleContent, HTMLStencilElement {}

    var HTMLAtArticleContentElement: {
      prototype: HTMLAtArticleContentElement;
      new (): HTMLAtArticleContentElement;
    };
    

    interface HTMLAtArticleElement extends StencilComponents.AtArticle, HTMLStencilElement {}

    var HTMLAtArticleElement: {
      prototype: HTMLAtArticleElement;
      new (): HTMLAtArticleElement;
    };
    

    interface HTMLAtBlockElement extends StencilComponents.AtBlock, HTMLStencilElement {}

    var HTMLAtBlockElement: {
      prototype: HTMLAtBlockElement;
      new (): HTMLAtBlockElement;
    };
    

    interface HTMLAtBlockquoteElement extends StencilComponents.AtBlockquote, HTMLStencilElement {}

    var HTMLAtBlockquoteElement: {
      prototype: HTMLAtBlockquoteElement;
      new (): HTMLAtBlockquoteElement;
    };
    

    interface HTMLAtCalloutElement extends StencilComponents.AtCallout, HTMLStencilElement {}

    var HTMLAtCalloutElement: {
      prototype: HTMLAtCalloutElement;
      new (): HTMLAtCalloutElement;
    };
    

    interface HTMLAtCitationElement extends StencilComponents.AtCitation, HTMLStencilElement {}

    var HTMLAtCitationElement: {
      prototype: HTMLAtCitationElement;
      new (): HTMLAtCitationElement;
    };
    

    interface HTMLAtControlElement extends StencilComponents.AtControl, HTMLStencilElement {}

    var HTMLAtControlElement: {
      prototype: HTMLAtControlElement;
      new (): HTMLAtControlElement;
    };
    

    interface HTMLAtFigureElement extends StencilComponents.AtFigure, HTMLStencilElement {}

    var HTMLAtFigureElement: {
      prototype: HTMLAtFigureElement;
      new (): HTMLAtFigureElement;
    };
    

    interface HTMLAtNoteElement extends StencilComponents.AtNote, HTMLStencilElement {}

    var HTMLAtNoteElement: {
      prototype: HTMLAtNoteElement;
      new (): HTMLAtNoteElement;
    };
    

    interface HTMLAtNotesElement extends StencilComponents.AtNotes, HTMLStencilElement {}

    var HTMLAtNotesElement: {
      prototype: HTMLAtNotesElement;
      new (): HTMLAtNotesElement;
    };
    

    interface HTMLAtReferenceElement extends StencilComponents.AtReference, HTMLStencilElement {}

    var HTMLAtReferenceElement: {
      prototype: HTMLAtReferenceElement;
      new (): HTMLAtReferenceElement;
    };
    

    interface HTMLAtReferencesElement extends StencilComponents.AtReferences, HTMLStencilElement {}

    var HTMLAtReferencesElement: {
      prototype: HTMLAtReferencesElement;
      new (): HTMLAtReferencesElement;
    };
    

    interface HTMLAtResumeElement extends StencilComponents.AtResume, HTMLStencilElement {}

    var HTMLAtResumeElement: {
      prototype: HTMLAtResumeElement;
      new (): HTMLAtResumeElement;
    };
    

    interface HTMLAtSummaryElement extends StencilComponents.AtSummary, HTMLStencilElement {}

    var HTMLAtSummaryElement: {
      prototype: HTMLAtSummaryElement;
      new (): HTMLAtSummaryElement;
    };
    

    interface HTMLAtTocElement extends StencilComponents.AtToc, HTMLStencilElement {}

    var HTMLAtTocElement: {
      prototype: HTMLAtTocElement;
      new (): HTMLAtTocElement;
    };
    

  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {
    'at-abstract': JSXElements.AtAbstractAttributes;
    'at-article-content': JSXElements.AtArticleContentAttributes;
    'at-article': JSXElements.AtArticleAttributes;
    'at-block': JSXElements.AtBlockAttributes;
    'at-blockquote': JSXElements.AtBlockquoteAttributes;
    'at-callout': JSXElements.AtCalloutAttributes;
    'at-citation': JSXElements.AtCitationAttributes;
    'at-control': JSXElements.AtControlAttributes;
    'at-figure': JSXElements.AtFigureAttributes;
    'at-note': JSXElements.AtNoteAttributes;
    'at-notes': JSXElements.AtNotesAttributes;
    'at-reference': JSXElements.AtReferenceAttributes;
    'at-references': JSXElements.AtReferencesAttributes;
    'at-resume': JSXElements.AtResumeAttributes;
    'at-summary': JSXElements.AtSummaryAttributes;
    'at-toc': JSXElements.AtTocAttributes;
    }
  }

  namespace JSXElements {

    export interface AtAbstractAttributes extends HTMLAttributes {
      'heading'?: string;
      'type'?: string;
    }

    export interface AtArticleContentAttributes extends HTMLAttributes {

    }

    export interface AtArticleAttributes extends HTMLAttributes {
      'control'?: boolean;
      'id'?: string;
      'theme'?: string;
      'toc'?: boolean;
    }

    export interface AtBlockAttributes extends HTMLAttributes {
      'caption'?: boolean;
      'heading'?: string;
      'type'?: string;
    }

    export interface AtBlockquoteAttributes extends HTMLAttributes {
      'author'?: string;
      'citation'?: string;
      'label'?: string;
      'locator'?: string;
      'source'?: string;
      'type'?: string;
    }

    export interface AtCalloutAttributes extends HTMLAttributes {
      'heading'?: string;
      'type'?: string;
    }

    export interface AtCitationAttributes extends HTMLAttributes {
      'authorOnly'?: boolean;
      'key'?: string;
      'label'?: string;
      'locator'?: string;
      'onCitationRendered'?: (event: CustomEvent) => void;
      'pref'?: string;
      'suffix'?: string;
      'suppressAuthor'?: boolean;
    }

    export interface AtControlAttributes extends HTMLAttributes {
      'content'?: string;
    }

    export interface AtFigureAttributes extends HTMLAttributes {
      'caption'?: string;
      'citation'?: string;
      'credit'?: string;
      'doi'?: string;
      'fullwidth'?: boolean;
      'href'?: string;
      'numbering'?: boolean;
      'src'?: string;
      'title'?: string;
    }

    export interface AtNoteAttributes extends HTMLAttributes {
      'onNoteRendered'?: (event: CustomEvent) => void;
      'type'?: string;
    }

    export interface AtNotesAttributes extends HTMLAttributes {
      'heading'?: string;
    }

    export interface AtReferenceAttributes extends HTMLAttributes {
      'callNumber'?: string;
      'chapter'?: string;
      'creator'?: string;
      'creatorSummary'?: string;
      'creators'?: Object;
      'date'?: string;
      'dateAdded'?: string;
      'doi'?: string;
      'isbn'?: string;
      'issn'?: string;
      'issue'?: string;
      'itemType'?: string;
      'key'?: string;
      'language'?: string;
      'numPages'?: string;
      'onReferenceRendered'?: (event: CustomEvent) => void;
      'pages'?: string;
      'parsedDate'?: string;
      'place'?: string;
      'pmid'?: string;
      'publisher'?: string;
      'title'?: string;
      'type'?: string;
      'url'?: string;
      'volume'?: string;
    }

    export interface AtReferencesAttributes extends HTMLAttributes {
      'fullwidth'?: boolean;
      'heading'?: string;
      'referencesFinded'?: boolean;
    }

    export interface AtResumeAttributes extends HTMLAttributes {
      'caption'?: boolean;
      'captionHeading'?: string;
      'heading'?: string;
      'type'?: string;
    }

    export interface AtSummaryAttributes extends HTMLAttributes {
      'heading'?: string;
      'type'?: string;
    }

    export interface AtTocAttributes extends HTMLAttributes {

    }
  }

  interface HTMLElementTagNameMap {
    'at-abstract': HTMLAtAbstractElement
    'at-article-content': HTMLAtArticleContentElement
    'at-article': HTMLAtArticleElement
    'at-block': HTMLAtBlockElement
    'at-blockquote': HTMLAtBlockquoteElement
    'at-callout': HTMLAtCalloutElement
    'at-citation': HTMLAtCitationElement
    'at-control': HTMLAtControlElement
    'at-figure': HTMLAtFigureElement
    'at-note': HTMLAtNoteElement
    'at-notes': HTMLAtNotesElement
    'at-reference': HTMLAtReferenceElement
    'at-references': HTMLAtReferencesElement
    'at-resume': HTMLAtResumeElement
    'at-summary': HTMLAtSummaryElement
    'at-toc': HTMLAtTocElement
  }

  interface ElementTagNameMap {
    'at-abstract': HTMLAtAbstractElement;
    'at-article-content': HTMLAtArticleContentElement;
    'at-article': HTMLAtArticleElement;
    'at-block': HTMLAtBlockElement;
    'at-blockquote': HTMLAtBlockquoteElement;
    'at-callout': HTMLAtCalloutElement;
    'at-citation': HTMLAtCitationElement;
    'at-control': HTMLAtControlElement;
    'at-figure': HTMLAtFigureElement;
    'at-note': HTMLAtNoteElement;
    'at-notes': HTMLAtNotesElement;
    'at-reference': HTMLAtReferenceElement;
    'at-references': HTMLAtReferencesElement;
    'at-resume': HTMLAtResumeElement;
    'at-summary': HTMLAtSummaryElement;
    'at-toc': HTMLAtTocElement;
  }
}
declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;