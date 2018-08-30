/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface AtAbstract {
      'heading': string;
      'type': string;
    }
  }

  interface HTMLAtAbstractElement extends StencilComponents.AtAbstract, HTMLStencilElement {}

  var HTMLAtAbstractElement: {
    prototype: HTMLAtAbstractElement;
    new (): HTMLAtAbstractElement;
  };
  interface HTMLElementTagNameMap {
    'at-abstract': HTMLAtAbstractElement;
  }
  interface ElementTagNameMap {
    'at-abstract': HTMLAtAbstractElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'at-abstract': JSXElements.AtAbstractAttributes;
    }
  }
  namespace JSXElements {
    export interface AtAbstractAttributes extends HTMLAttributes {
      'heading'?: string;
      'type'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AtArticleContent {

    }
  }

  interface HTMLAtArticleContentElement extends StencilComponents.AtArticleContent, HTMLStencilElement {}

  var HTMLAtArticleContentElement: {
    prototype: HTMLAtArticleContentElement;
    new (): HTMLAtArticleContentElement;
  };
  interface HTMLElementTagNameMap {
    'at-article-content': HTMLAtArticleContentElement;
  }
  interface ElementTagNameMap {
    'at-article-content': HTMLAtArticleContentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'at-article-content': JSXElements.AtArticleContentAttributes;
    }
  }
  namespace JSXElements {
    export interface AtArticleContentAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AtArticle {
      'control': boolean;
      'id': string;
      'theme': string;
      'toc': boolean;
    }
  }

  interface HTMLAtArticleElement extends StencilComponents.AtArticle, HTMLStencilElement {}

  var HTMLAtArticleElement: {
    prototype: HTMLAtArticleElement;
    new (): HTMLAtArticleElement;
  };
  interface HTMLElementTagNameMap {
    'at-article': HTMLAtArticleElement;
  }
  interface ElementTagNameMap {
    'at-article': HTMLAtArticleElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'at-article': JSXElements.AtArticleAttributes;
    }
  }
  namespace JSXElements {
    export interface AtArticleAttributes extends HTMLAttributes {
      'control'?: boolean;
      'id'?: string;
      'theme'?: string;
      'toc'?: boolean;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AtBlock {
      'caption': boolean;
      'heading': string;
      'type': string;
    }
  }

  interface HTMLAtBlockElement extends StencilComponents.AtBlock, HTMLStencilElement {}

  var HTMLAtBlockElement: {
    prototype: HTMLAtBlockElement;
    new (): HTMLAtBlockElement;
  };
  interface HTMLElementTagNameMap {
    'at-block': HTMLAtBlockElement;
  }
  interface ElementTagNameMap {
    'at-block': HTMLAtBlockElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'at-block': JSXElements.AtBlockAttributes;
    }
  }
  namespace JSXElements {
    export interface AtBlockAttributes extends HTMLAttributes {
      'caption'?: boolean;
      'heading'?: string;
      'type'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AtBlockquote {
      'author': string;
      'citation': string;
      'label': string;
      'locator': string;
      'source': string;
      'type': string;
    }
  }

  interface HTMLAtBlockquoteElement extends StencilComponents.AtBlockquote, HTMLStencilElement {}

  var HTMLAtBlockquoteElement: {
    prototype: HTMLAtBlockquoteElement;
    new (): HTMLAtBlockquoteElement;
  };
  interface HTMLElementTagNameMap {
    'at-blockquote': HTMLAtBlockquoteElement;
  }
  interface ElementTagNameMap {
    'at-blockquote': HTMLAtBlockquoteElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'at-blockquote': JSXElements.AtBlockquoteAttributes;
    }
  }
  namespace JSXElements {
    export interface AtBlockquoteAttributes extends HTMLAttributes {
      'author'?: string;
      'citation'?: string;
      'label'?: string;
      'locator'?: string;
      'source'?: string;
      'type'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AtCallout {
      'heading': string;
      'type': string;
    }
  }

  interface HTMLAtCalloutElement extends StencilComponents.AtCallout, HTMLStencilElement {}

  var HTMLAtCalloutElement: {
    prototype: HTMLAtCalloutElement;
    new (): HTMLAtCalloutElement;
  };
  interface HTMLElementTagNameMap {
    'at-callout': HTMLAtCalloutElement;
  }
  interface ElementTagNameMap {
    'at-callout': HTMLAtCalloutElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'at-callout': JSXElements.AtCalloutAttributes;
    }
  }
  namespace JSXElements {
    export interface AtCalloutAttributes extends HTMLAttributes {
      'heading'?: string;
      'type'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AtCitation {
      'authorOnly': boolean;
      'key': string;
      'label': string;
      'locator': string;
      'pref': string;
      'suffix': string;
      'suppressAuthor': boolean;
    }
  }

  interface HTMLAtCitationElement extends StencilComponents.AtCitation, HTMLStencilElement {}

  var HTMLAtCitationElement: {
    prototype: HTMLAtCitationElement;
    new (): HTMLAtCitationElement;
  };
  interface HTMLElementTagNameMap {
    'at-citation': HTMLAtCitationElement;
  }
  interface ElementTagNameMap {
    'at-citation': HTMLAtCitationElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'at-citation': JSXElements.AtCitationAttributes;
    }
  }
  namespace JSXElements {
    export interface AtCitationAttributes extends HTMLAttributes {
      'authorOnly'?: boolean;
      'key'?: string;
      'label'?: string;
      'locator'?: string;
      'pref'?: string;
      'suffix'?: string;
      'suppressAuthor'?: boolean;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AtControl {
      'content': string;
    }
  }

  interface HTMLAtControlElement extends StencilComponents.AtControl, HTMLStencilElement {}

  var HTMLAtControlElement: {
    prototype: HTMLAtControlElement;
    new (): HTMLAtControlElement;
  };
  interface HTMLElementTagNameMap {
    'at-control': HTMLAtControlElement;
  }
  interface ElementTagNameMap {
    'at-control': HTMLAtControlElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'at-control': JSXElements.AtControlAttributes;
    }
  }
  namespace JSXElements {
    export interface AtControlAttributes extends HTMLAttributes {
      'content'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
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
  }

  interface HTMLAtFigureElement extends StencilComponents.AtFigure, HTMLStencilElement {}

  var HTMLAtFigureElement: {
    prototype: HTMLAtFigureElement;
    new (): HTMLAtFigureElement;
  };
  interface HTMLElementTagNameMap {
    'at-figure': HTMLAtFigureElement;
  }
  interface ElementTagNameMap {
    'at-figure': HTMLAtFigureElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'at-figure': JSXElements.AtFigureAttributes;
    }
  }
  namespace JSXElements {
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
  }
}


declare global {

  namespace StencilComponents {
    interface AtNote {
      'type': string;
    }
  }

  interface HTMLAtNoteElement extends StencilComponents.AtNote, HTMLStencilElement {}

  var HTMLAtNoteElement: {
    prototype: HTMLAtNoteElement;
    new (): HTMLAtNoteElement;
  };
  interface HTMLElementTagNameMap {
    'at-note': HTMLAtNoteElement;
  }
  interface ElementTagNameMap {
    'at-note': HTMLAtNoteElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'at-note': JSXElements.AtNoteAttributes;
    }
  }
  namespace JSXElements {
    export interface AtNoteAttributes extends HTMLAttributes {
      'type'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AtNotes {
      'fullwidth': boolean;
      'heading': string;
      'type': string;
    }
  }

  interface HTMLAtNotesElement extends StencilComponents.AtNotes, HTMLStencilElement {}

  var HTMLAtNotesElement: {
    prototype: HTMLAtNotesElement;
    new (): HTMLAtNotesElement;
  };
  interface HTMLElementTagNameMap {
    'at-notes': HTMLAtNotesElement;
  }
  interface ElementTagNameMap {
    'at-notes': HTMLAtNotesElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'at-notes': JSXElements.AtNotesAttributes;
    }
  }
  namespace JSXElements {
    export interface AtNotesAttributes extends HTMLAttributes {
      'fullwidth'?: boolean;
      'heading'?: string;
      'type'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
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
  }

  interface HTMLAtReferenceElement extends StencilComponents.AtReference, HTMLStencilElement {}

  var HTMLAtReferenceElement: {
    prototype: HTMLAtReferenceElement;
    new (): HTMLAtReferenceElement;
  };
  interface HTMLElementTagNameMap {
    'at-reference': HTMLAtReferenceElement;
  }
  interface ElementTagNameMap {
    'at-reference': HTMLAtReferenceElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'at-reference': JSXElements.AtReferenceAttributes;
    }
  }
  namespace JSXElements {
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
  }
}


declare global {

  namespace StencilComponents {
    interface AtReferences {
      'fullwidth': boolean;
      'heading': string;
      'type': string;
    }
  }

  interface HTMLAtReferencesElement extends StencilComponents.AtReferences, HTMLStencilElement {}

  var HTMLAtReferencesElement: {
    prototype: HTMLAtReferencesElement;
    new (): HTMLAtReferencesElement;
  };
  interface HTMLElementTagNameMap {
    'at-references': HTMLAtReferencesElement;
  }
  interface ElementTagNameMap {
    'at-references': HTMLAtReferencesElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'at-references': JSXElements.AtReferencesAttributes;
    }
  }
  namespace JSXElements {
    export interface AtReferencesAttributes extends HTMLAttributes {
      'fullwidth'?: boolean;
      'heading'?: string;
      'type'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AtResume {
      'caption': boolean;
      'captionHeading': string;
      'heading': string;
      'type': string;
    }
  }

  interface HTMLAtResumeElement extends StencilComponents.AtResume, HTMLStencilElement {}

  var HTMLAtResumeElement: {
    prototype: HTMLAtResumeElement;
    new (): HTMLAtResumeElement;
  };
  interface HTMLElementTagNameMap {
    'at-resume': HTMLAtResumeElement;
  }
  interface ElementTagNameMap {
    'at-resume': HTMLAtResumeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'at-resume': JSXElements.AtResumeAttributes;
    }
  }
  namespace JSXElements {
    export interface AtResumeAttributes extends HTMLAttributes {
      'caption'?: boolean;
      'captionHeading'?: string;
      'heading'?: string;
      'type'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AtSummary {
      'heading': string;
      'type': string;
    }
  }

  interface HTMLAtSummaryElement extends StencilComponents.AtSummary, HTMLStencilElement {}

  var HTMLAtSummaryElement: {
    prototype: HTMLAtSummaryElement;
    new (): HTMLAtSummaryElement;
  };
  interface HTMLElementTagNameMap {
    'at-summary': HTMLAtSummaryElement;
  }
  interface ElementTagNameMap {
    'at-summary': HTMLAtSummaryElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'at-summary': JSXElements.AtSummaryAttributes;
    }
  }
  namespace JSXElements {
    export interface AtSummaryAttributes extends HTMLAttributes {
      'heading'?: string;
      'type'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AtToc {

    }
  }

  interface HTMLAtTocElement extends StencilComponents.AtToc, HTMLStencilElement {}

  var HTMLAtTocElement: {
    prototype: HTMLAtTocElement;
    new (): HTMLAtTocElement;
  };
  interface HTMLElementTagNameMap {
    'at-toc': HTMLAtTocElement;
  }
  interface ElementTagNameMap {
    'at-toc': HTMLAtTocElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'at-toc': JSXElements.AtTocAttributes;
    }
  }
  namespace JSXElements {
    export interface AtTocAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;