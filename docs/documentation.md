---
layout: default
title: Documentation
---

- TOC
{:toc}

## Install

Use one of this solution to "install" the `at-article` component in your project.

### Script tag

- Put a script tag similar to this `<script src='https://unpkg.com/at-article@latest/dist/at-article.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html, etc.

### Node Modules
- Run `npm install at-article --save`
- Put a script tag similar to this `<script src='node_modules/at-article/dist/at-article.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html, etc.

### In a stencil-starter app
- Run `npm install at-article --save`
- Add `{ name: 'at-article' }` to your [collections](https://github.com/ionic-team/stencil-starter/blob/master/stencil.config.js#L5)
- Then you can use the element anywhere in your template, JSX, html, etc.

## Usage

### Article container (at-article)
This tag is the article container and indicates its scope. It is not necessary to include this tag. However, its utilization is recommended in order to form a coherent article from top to bottom.

**Markup**
```html
<at-article toc="true" controle="true"></at-article>
```

Property | Default | Explanations
--- | --- | ---
id | `at-article` | Global id
toc | `false` | Display the `at-toc` component
conrol | `false` | Display the `at-control` component

### Article content (at-article-content)
It indicates the field of action of the main content of the article, its body, its content. In addition, the component adds a symbol indicating the end of the body text.

**Markup**
```html
<at-article-content></at-article-content>
```

### Table of content (at-toc)
This component is used to insert a table of content (TOC). The headings covered range from h2 to h6. The components use the [anchor-js](https://github.com/bryanbraun/anchorjs) and [tocbot](https://github.com/tscanlin/tocbot) libraries. It can be used as is, but it is recommended that you call it via the `at-article` component with `toc="true"`. The content of the toc is defined by the `js-at-toc-content`. Add it the the `at-article` container for example.

**Markup**
```html
<at-toc></at-toc>
```
### Control (at-control)
This component is used to insert a control bar at the top right of the article. The buttons displayed can show/hide the toc, increase/decrease de font size, print and ~~export to pdf~~ the article and change the article style. It can be used as is, but it is recommended that you call it via the `at-article` component with `control="true"`.

**Markup**
```html
<at-control></at-control>
```


### Block (at-block)
The block element allows highlighting content with a contrasted graphic aspect with the rest of the article. *In this example the blocks are not numbered because they must be included in the `at-article` component.*

**Preview**
<at-block>Lorem ispum</at-block>
<at-block type="example" caption="true" heading="Heading">Lorem ispum</at-block>
**Markup**
```html
<at-block>Lorem ispum</at-block>
```
```html
<at-block type="example" caption="true" heading="Heading">Lorem ispum</at-block>
```

Property | Default | Explanations
--- | --- | ---
type  | `default` |  The values can be `default`, `info`, `example`, `warning`, `definition` or `fact`
caption | `false` | If `true`, display a numbered caption
heading  |   |  If set, displays the inserted title

### Blockquote (at-blockquote)
The blockquote element is used to indicate the quotation of a large section of text from another source.

**Preview**
<at-blockquote author="Victor Hugo" source="Les misérables">Lorem ipsum.</at-blockquote>
<at-blockquote type="locator" locator="53" locatorPrefix="p. " author="Victor Hugo" source="Les misérables">Lorem ipsum.</at-blockquote>
**Markup**
```html
<at-blockquote author="Victor Hugo" source="Les misérables">Lorem ipsum.</at-blockquote>
```
```html
<at-blockquote type="locator" locator="53" label="p. " author="Victor Hugo" source="Les misérables">Lorem ipsum.</at-blockquote>
```

Property | Default | Explanations
--- | --- | ---
type  | `default` |  The values can be `default` or `locator`
author |  | If set, display the author.
source |  | If set, display the source.
locator  |   |  If set, indicates the location of the quote. Only with `type="locator"`.
label  |   |  If set, specifies the location of the citation. Only with `type="locator"`.

### Callout (at-callout)
The callout block calls for an action: a reference to an external or internal link; or describes a short content intended to attract attention.

**Preview**

Lorem ispum <at-callout>Lorem <a href="http://example.com">link</a> ispum</at-callout> dolor es.

<at-callout type="block">Lorem ispum</at-callout>

**Markup**
```html
<at-callout type="inline">Lorem <a href="http://example.com">link</a> ispum</at-callout>
```
```html
<at-callout>Lorem ispum</at-callout>
```

Property | Default | Explanations
--- | --- | ---
type  | `inline` |  The values can be `inline` or `block`
heading |  | If set, display the heading.

### Figure (at-figure)
The figure block is used for inserting a floating image, table, or graphic separate from the main text.

**Preview**
<at-figure src="https://picsum.photos/1500/300?image=1076" href="https://example.com" fullwidth="false" title="Si eum fuissemus" caption="Ut inter quae ululatu isdem confertos moliens et milites confertos." doi="10.1007/s00223-003-0070-0" credit="Copyright 1932 by the Estate of B. Wooster. Reprinted with permission." numbering="true">Primum praefecti hirsutis ullo Montium senem in morati corpore usque praefecti hirsutis ullo Montium senem in morati.</at-figure>
**Markup**
```html
<at-figure src="https://picsum.photos/1500/300?image=1076" href="https://example.com" fullwidth="false" title="Si eum fuissemus" caption="Ut inter quae ululatu isdem confertos moliens et milites confertos." doi="10.1007/s00223-003-0070-0" credit="Copyright 1932 by the Estate of B. Wooster. Reprinted with permission." numbering="true">Primum praefecti hirsutis ullo Montium senem in morati corpore usque praefecti hirsutis ullo Montium senem in morati.</at-figure>
```

Property | Default | Explanations
--- | --- | ---
src |  | The source image/file
href  |  |  If set, add a link
fullwidth  | `false`  |  If `true`, add the *at-figure-fullwidth* class and display a fullwidth figure.
title  |   |  *Title* and *alt* property.
caption  |   | If set, display a caption.
doi  |   |  If set, display the figure DOI.
numbering  | `false`  |  If set to `true`, the figure is numbered.
credit  |   |  If set, include a credit line. If you have obtained permission to use the photograph, you should indicate this in the caption. Write a line after the full citation in your caption indicating who owns the photograph and that you have their permission to use it. For example: *Fig. 1. Reginald Pepper, Still Life with Haddock. 1919, black and white photographic print. The Estate of B. Wooster. From: B. Wooster, Pepper’s Pictures. London: Faux Publications, 1932. Pl. 275. Copyright 1932 by the Estate of B. Wooster. Reprinted with permission.*
~~citation~~  |   |  

### Note (at-note)
The note inline-block allows inserting a content at the bottom of a page or in the margin. The note provides an author's comments on the main text. It can be numbered or not. Note that the notes are responsive. They become clickable as the screen narrows. *In this example the notes are not numbered because they must be included in the `at-article` component. Also note that to number notes correctly, the `at-notes` component must be present in the `at-article` container.*

**Preview**
<at-note>Default note numbering.</at-note>
<at-note type="margin">Simple margin note without numbering.</at-note>
**Markup**
```html
<at-note>Default note numbered.</at-note>
```
```html
<at-note type="margin">Simple margin note with a <a href="https://example.com">link</a> without numbering.</at-note>
```

Property | Default | Explanations
--- | --- | ---
type  | `default` |  The values can be `default`, `foot` or `margin`. The `default` value displays the note inline in the body with small screen and in the margin with large screen. The `margin` value displays the note inline in the body with small screen and in the margin with large screen without numbering it. The `foot` value creates a simple link to the note in the `at-notes` note in the section.

### Notes section (at-notes)
This section block is essential to display and number footnotes. It is recomanded to be disposed outside the `at-article-content` block bur inside the `at-article` container.

**Preview**
<at-notes></at-notes>
**Markup**
```html
<at-notes></at-notes>
```
```html
<at-notes heading="Noten"></at-notes>
```

Property | Default | Explanations
--- | --- | ---
heading  | `Notes` |  If set, change the heading of the notes section.

### Reference (at-reference)
The reference inline-block allows the insertion of a reference that comes outside the article that the author uses to support his or her claim: book, article, website, etc. *Note that to number references correctly, the `at-references` component must be present in the `at-article` container.*

**Preview**

- Defautlt inline reference<at-reference language="en" title="Acute Effects of an Oral Calcium Load on Markers of Bone Metabolism During Endurance Cycling Exercise in Male Athletes" creator="J. Guillemant, C. Accarie, G. Peres, S. Guillemant" date="2004" publisher="Calcified Tissue International" pages="407-414" volume="74" issue="5" issn="1432-0827" doi="10.1007/s00223-003-0070-0" url="https://link.springer.com/article/10.1007%2Fs00223-003-0070-0" itemType="journalArticle"></at-reference> and a second one<at-reference title="Les misérables" creator="Victor Hugo" itemType="book" date="1862" publisher="Albert Lacroix et Cie" place="Paris"></at-reference>.

- An author-date (a-d) reference <at-reference type="a-d" title="Les misérables" creator="Victor Hugo" itemType="book" date="1862" publisher="Albert Lacroix et Cie" place="Paris"></at-reference> and an inline reference: <at-reference type="inline" title="Comment Je Vois le Monde" creator="Einstein Albert" date="2017" publisher="Flammarion" isbn="9782081404359" itemType="book"></at-reference>

- Than a bibliography style reference:
<at-reference type="bibliography" title="La vérité sur l'affaire Harry Quebert" creator="Dicker Joël" date="2014" publisher="De Fallois" isbn="9782877068635" itemType="book" url="https://example.com"></at-reference>

**Markup**
```html
<at-reference language="en" title="Acute Effects of an Oral Calcium Load on Markers of Bone Metabolism During Endurance Cycling Exercise in Male Athletes" creator="J. Guillemant, C. Accarie, G. Peres, S. Guillemant" date="2004" publisher="Calcified Tissue International" pages="407-414" volume="74" issue="5" issn="1432-0827" doi="10.1007/s00223-003-0070-0" url="https://link.springer.com/article/10.1007%2Fs00223-003-0070-0" itemType="journalArticle"></at-reference>
```
```html
<at-reference title="Les misérables" creator="Victor Hugo" itemType="book" date="1862" publisher="Albert Lacroix et Cie" place="Paris"></at-reference>
```
```html
<at-reference type="inline" title="Comment Je Vois le Monde" creator="Einstein Albert" date="2017" publisher="Flammarion" isbn="9782081404359" itemType="book"></at-reference>
```
```html
<at-reference type="bibliography" title="La vérité sur l'affaire Harry Quebert" creator="Dicker, Joël" date="2014" publisher="De Fallois" isbn="9782877068635" itemType="book" url="https://example.com">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae ultricies ante, sit amet tincidunt dolor. Vestibulum eget odio vitae enim interdum commodo vel et mauris. Curabitur ullamcorper gravida leo feugiat tempor.</at-reference>
```

Property | Default | Explanations
--- | --- | ---
type  | `default` |  The values can be `default`, `inline`, `a-d` or `bibliography`.
creator  |   |  
title  |   |  
publisher  |   |  Set here the publisher, the publication title or the website title.
place  |   |  
numPages  |   |  Number of pages
pages  |   |  
volume  |   |  
issue  |   |  
chapter  |   |  
language  |   |  With ISO 639 codes
isbn  |   |  ISBN number
issn  |   |  ISSN number
doi  |   |  
pmid  |   |  PMID number
url  |   |  Reference's url
key  |   |  If not set, a key is automatically generated

### References section (at-references)
This section block is essential to display references. It works like a bibliography or as a summary of the references inserted in the article. It is recomanded to be disposed outside the `at-article-content` block bur inside the `at-article` container.

**Preview**
<at-references></at-references>
**Markup**
```html
<at-references></at-references>
```
```html
<at-references heading="Referenz"></at-references>
```

Property | Default | Explanations
--- | --- | ---
heading  | `References` |  If set, change the heading of the notes section.

### Citations (at-citation)
The citation inline-block allows the insertion of a reference to a reference. It is then essential to refer the key of a reference previously inserted in the article. *Note that to number citations correctly, the `at-references` component must be present in the `at-article` container.*

**Preview**

A reference to <cite>Les misérables</cite><at-citation key="lesvic62"></at-citation> and an other<at-citation key="lesvic62" locator="53" label="p. "></at-citation>.

**Markup**
```html
<at-citation key="lesvic62"></at-citation>
```
```html
<at-citation key="lesvic62" locator="53" label="p. "></at-citation>
```

Property | Default | Explanations
--- | --- | ---
key  | **required** |  Reference to an `at-reference` key.
locator  |   |  If set, indicates the location of the citation in the work referenced.
label  |   |  If set, specifies the location of the citation in the work referenced.
pref  |   |  If set, add a prefix to the locator.
suffix  |   |  If set, add a suffix to the locator.

### Abstract (at-abstract)
This block is used to offer a shortened content of the article by using different words and sentences to help the reader quickly ascertain the article's purpose. It is usually inserted at the beginning of an article.

**Preview**
<at-abstract>Lorem ispum</at-abstract>
**Markup**
```html
<at-abstract>Lorem ispum</at-abstract>
```

### Summary (at-summary)
This block is used to offer a short conclusion of the article to help the reader quickly ascertain the article's purpose. It is usually inserted at the end of an article.

**Preview**
<at-summary>Lorem ispum</at-summary>
**Markup**
```html
<at-summary>Lorem ispum</at-summary>
```
