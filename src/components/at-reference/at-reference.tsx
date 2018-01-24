import { Component, Prop } from '@stencil/core';
import tippy from 'tippy.js';

@Component({
  tag: 'at-reference',
  styleUrl: 'at-reference.scss'
})
export class AtReference {

  // Indicate that name should be a public property on the component
  @Prop() type: string = 'default'; // default, inline, author-date, a-d, bibliography
  @Prop() key: string;
  @Prop() creator: string;
  @Prop() creatorSummary: string;
  @Prop() parsedDate: string;
  @Prop() itemType: string;
  @Prop() title: string;
  @Prop() creators: Object;
  @Prop() publisher: string; // publisher, publicationTitle, websiteTitle
  @Prop() place: string;
  @Prop() date: string;
  @Prop() numPages: string;
  @Prop() pages: string;
  @Prop() volume: string;
  @Prop() issue: string;
  @Prop() chapter: string;
  @Prop() language: string;
  @Prop() isbn: string;
  @Prop() issn: string;
  @Prop() doi: string;
  @Prop() pmid: string;
  @Prop() url: string;
  @Prop() callNumber: string;
  @Prop() dateAdded: string;


  componentDidLoad() {

  }

  render() {
    if(this.type == 'default'){
      return (
        <span class="at-reference at-reference-default at-reference-is-referenced">
          <span class="at-reference-number"></span>
        </span>
      );
    }
    if(this.type == 'inline'){
      return (
        <span class="at-reference at-reference-inline">
        {this.language ? <span class="at-reference-language">(<abbr title={'Language: '+this.language}>{this.language}</abbr>)</span>  : null}{this.creator ? ' '  : null}
        {this.creator ? this.creator + '. ' : null}
        {this.date ? <span itemprop="datePublished">{this.date}</span>  : null}{this.date ? '. '  : null}
        {this.title && ! this.url  ? <cite itemprop="name">{this.title}</cite> : null}
        {this.title && this.url ? <cite itemprop="name"><a href={this.url} rel="nofollow noopener noreferrer">{this.title}</a></cite> : null}{this.title ? '. '  : null}
        {this.publisher ? this.publisher : null}
        {this.volume ? ', vol. ' + this.volume : null}
        {this.issue ? ', no. ' + this.issue : null}
        {this.pages ? ', pp. ' + this.pages : null}
        {this.chapter ? ', chap. ' + this.chapter : null}
        {this.publisher || this.volume || this.chapter|| this.pages ? '. ' : null}

        {this.isbn ? <small><a href={'https://en.wikipedia.org/wiki/Special:BookSources/'+this.isbn} title={'Resolve this ISBN: '+this.isbn} rel="noopener noreferrer"><span class="nowrap" itemprop="isbn">{this.isbn}</span></a></small> : null}
        {this.issn ? <small class="at-reference-issn">&#160;<a href="https://fr.wikipedia.org/wiki/International_Standard_Serial_Number" title="International Standard Serial Number" rel="noopener noreferrer">ISSN</a>:<a href={'http://worldcat.org/issn/'+this.issn+'&amp;lang=fr'}><span class="nowrap">{this.issn}</span></a></small> : null}
        {this.pmid ? <small class="at-reference-pubmed">&#160;<a href="https://fr.wikipedia.org/wiki/PMID" title="PubMed Identifier">PubMed</a>:<a rel="nofollow noopener noreferrer" itemprop="sameAs" href={'https://www.ncbi.nlm.nih.gov/pubmed/'+this.pmid}>{this.pmid}</a></small> : null}
        {this.doi ? <small class="at-reference-doi">&#160;<a href="https://fr.wikipedia.org/wiki/Digital_Object_Identifier" title="Digital Object Identifier">DOI</a>:<a itemprop="sameAs" rel="nofollow noopener noreferrer" href={'https://dx.doi.org/'+this.doi}>{this.doi}</a></small> : null}

        </span>
      );
    }
    else if (this.type == 'author-date' || this.type == 'a-d') {
      return (
        <span class="at-reference at-reference-a-d at-reference-is-referenced">
        (<a>{this.creator ? (this.creator.split(' ').slice(-1).join(' ') + ' ') : null}&#160;{this.date ? new Date(this.date).getFullYear() + '' : null}</a>)
        </span>
      );
    }
    else if (this.type == 'bibliography') {
      return (
        <span class="at-reference at-reference-bibliography" itemscope itemtype="http://schema.org/Book">
        {this.language ? <span class="at-reference-language">(<abbr title={'Language: '+this.language}>{this.language}</abbr>)</span>  : null}{this.creator ? ' '  : null}
        {this.creator ? <span itemprop="creator">{this.creator}</span>  : null}{this.creator ? '. '  : null}
        {this.date ? <span itemprop="datePublished">{this.date}</span>  : null}{this.date ? '. '  : null}
        {this.title ? <cite itemprop="name">{this.title}</cite> : null}{this.title ? '. '  : null}
        {this.publisher ? <span itemprop="publisher">{this.publisher}</span>  : null}
        {this.volume ? ', vol. ' + this.volume : null}
        {this.issue ? ', no. ' + this.issue : null}
        {this.pages ? ', pp. ' + this.pages : null}
        {this.chapter ? ', chap. ' + this.chapter : null}
        {this.publisher || this.volume || this.chapter|| this.pages ? '. ' : null}

        {this.isbn ? <small><a href={'https://en.wikipedia.org/wiki/Special:BookSources/'+this.isbn} title={'Resolve this ISBN: '+this.isbn} rel="noopener noreferrer"><span class="nowrap" itemprop="isbn">{this.isbn}</span></a></small> : null}
        {this.issn ? <small class="at-reference-issn">&#160;<span title="International Standard Serial Number">ISSN</span>:<a href={'http://worldcat.org/issn/'+this.issn+'&amp;lang=fr'}><span class="nowrap">{this.issn}</span></a></small> : null}
        {this.pmid ? <small class="at-reference-pubmed">&#160;<span title="PubMed Identifier">PubMed</span>:<a rel="nofollow" itemprop="sameAs" href={'https://www.ncbi.nlm.nih.gov/pubmed/'+this.pmid}>{this.pmid}</a></small> : null}
        {this.doi ? <small class="at-reference-doi">&#160;<span title="Digital Object Identifier">DOI</span>:<a itemprop="sameAs" rel="nofollow noopener noreferrer" href={'https://dx.doi.org/'+this.doi}>{this.doi}</a></small> : null}

        <span class="at-reference-links">
          {this.url ? <span class="at-reference-read-online" itemprop="url"><a title="View reference" href={this.url}>View</a></span> : null}
          {this.title && this.itemType != 'webpage' ? <span class="at-reference-gs"><a title="Search in Google Scholar" href={'https://scholar.google.com/scholar?q='+this.title}>GS</a></span> : null}
        </span>

        <div class="at-reference-abstract"><slot></slot></div>
        </span>
      );
    }
  }
}