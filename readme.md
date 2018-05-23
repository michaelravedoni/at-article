# at-article
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge)](https://github.com/michaelravedoni/at-article/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/at-article.svg?style=for-the-badge)](https://www.npmjs.com/package/at-article)

`at-article` is a Web Component collection using [Stencil](https://github.com/ionic-team/stencil) for writing blogs and academics web articles.

![](header.png)

## Features

## Install

Use one of this solution to "install" the `at-article` component in your project.

### Script tag

- Put a script tag similar to this `<script src='https://unpkg.com/at-article@<version>/dist/at-article.js'></script>` in the head of your index.html
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

Demo :

- [academic article](https://ravedoni.com/go/atarticledemoacademic)
- [blog article](https://ravedoni.com/go/atarticledemoblog)

### at-article
This tag is the article container and indicates its scope.

```html
<at-article></at-article>
```

Property | Default | Explanations
--- | --- | ---
class | `at-article-content` | Global class
id | `at-article-content` | Global id

### at-article-content
It indicates the field of action of the main content of the article, its body, its content.

```html
<at-article-content></at-article-content>
```

Property | Default | Explanations
--- | --- | ---
class | `at-article` | Global class
id | `at-article` | Global id

### at-block
The block element allows to highlight content with a contrasted graphic aspect with the rest of the article.

```html
<at-block caption="true" heading="Si eum fuissemus" type="info">Lorem ispum</at-block>
```

Property | Default | Explanations
--- | --- | ---
caption | `false` | If `true`, display a numbering caption.
~~captionHeading~~ |  |
heading  |   |  Display a heading
type  | `default` |  The values can be `default`, `info`, `example`or `warning`

### at-blockquote
The blockquote element is used to indicate the quotation of a large section of text from another source.

```html
<at-blockquote author="Bruce Willis" source="Book sources">Lorem ipsum.</at-blockquote>
```
```html
<at-blockquote type="locator" locator="53" locatorPrefix="p. " author="Bruce Willis" source="Source of the quote">Lorem ipsum.</at-blockquote>
```

Property | Default | Explanations
--- | --- | ---
author |  | If set, display the author.
source |  | If set, display the source.
locator  |   |  Only with `type="locator"`.
locatorPrefix  |   |  Only with `type="locator"`.
type  | `default` |  The values can be `default`, `inline` or `locator`

### at-callout
The callout block calls for an action: a reference to an external or internal link ; or describes a short content intended to attract attention.

```html
<at-callout type="inline">Lorem <a href="http://example.com">link</a> ispum</at-callout>
```
```html
<at-callout>Lorem ispum</at-callout>
```

Property | Default | Explanations
--- | --- | ---
heading |  | If set, display the heading.
type  | `block` |  The values can be `inline` or `block`

### at-figure
The figure block is used for insert a floating image, table, or graphic separate from the main text.

```html
<at-figure src="https://picsum.photos/1500/300?image=1076" href="https://example.com" fullwidth="true" title="Si eum fuissemus" caption="Ut inter quae ululatu isdem confertos moliens et milites confertos." doi="10.1007/s00223-003-0070-0" credit="Copyright 1932 by the Estate of B. Wooster. Reprinted with permission." numbering="true">Primum praefecti hirsutis ullo Montium senem in morati corpore usque praefecti hirsutis ullo Montium senem in morati.</at-figure>
```

Property | Default | Explanations
--- | --- | ---
src |  | The source image/file
href  |  |  If set, add a link
fullwidth  | `false`  |  If `true`, add the *at-figure-fullwidth* class
title  |   |  *Title* and *alt* property.
caption  |   | If set, display a caption.
doi  |   |  If set, display the figure DOI.
numbering  | `false`  |  If set to `true`, number the figure
credit  |   |  Include a credit line. If you have obtained permission to use the photograph, you should indicate this in the caption. Write a line after the full citation in your caption indicating who owns the photograph and that you have their permission to use it. For example: *Fig. 1. Reginald Pepper, Still Life with Haddock. 1919, black and white photographic print. The Estate of B. Wooster. From: B. Wooster, Pepper’s Pictures. London: Faux Publications, 1932. Pl. 275. Copyright 1932 by the Estate of B. Wooster. Reprinted with permission.*
~~citation~~  |   |  

### at-note
The note inline block allows to insert a content at the bottom of a page or in the margin. The note provide an author's comments on the main text. It can be numbered or not.

```html
<at-note type="margin">Simple margin note with a <a href="https://example.com">link</a> without numbering.</at-note>
```
```html
<at-note>Default note numbering.</at-note>
```

Property | Default | Explanations
--- | --- | ---
type  | `default` |  The values can be `default`, `foot` or `margin`. `default` display the note inline with small screen and margin with large screen. margin display the note inline with small screen and margin with large screen without numbering it. `foot` create a simple link to the note in the `at-notes` note in the section.

### at-notes
This section block is essential to display footnotes. It is to be disposed of outside the `at-article-content` block.

```html
<at-notes></at-notes>
```
```html
<at-notes heading="Noten"></at-notes>
```

Property | Default | Explanations
--- | --- | ---
heading  | `Notes` |  Set the heading of the notes section.

### at-reference
The reference inline block allows for the insertion of a reference to content outside the article that the author uses to support his or her claim: book, article, website, etc.

```html
<at-reference key="aa2012" title="Biological concepts" creator="Albert Auguste" itemType="journalArticle" date="2012" publisher="Nature" pages="138-143" volume="4" issue="2" language="en" issn="2334-1984" pmid="2345" doi="10.1007/s00223-003-0070-0"></at-reference>
```
```html
<at-reference key="key" title="Paris, ville de la mode" creator="Jean Dubois" itemType="webpage" date="2012" publisher="Le Monde" place="Paris"></at-reference>
```
```html
<at-reference type="inline" title="Paris, ville de la mode" creator="Jean Dubois" itemType="webpage" date="2012" publisher="Le Monde" place="Paris"></at-reference>
```
```html
<at-reference type="a-d" title="Physics" creator="Albert Henri Einstein" date="2015" publisher="Point" url="https://example.com"></at-reference>
```

Property | Default | Explanations
--- | --- | ---
type  | `default` |  The values can be `default`, `inline`, `author-date`, `a-d` or `bibliography`.
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
callNumber  |   |  
key  |   |  

### at-references
This section block is essential to display references. It works like a bibliography or as a summary of the references inserted in the article. It is to be disposed of outside the `at-article-content` block.

```html
<at-references></at-references>
```
```html
<at-references heading="Referenz"></at-references>
```

Property | Default | Explanations
--- | --- | ---
heading  | `References` |  Set the heading of the notes section.

### at-summary
This block is used to offer a shortened content of the article by using different words and sentences to help the reader quickly ascertain the article's purpose. It is usually inserted at the beginning of an article.

```html
<at-summary>Lorem ispum</at-summary>
```

## Build with
![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

- [Stencil](https://github.com/ionic-team/stencil) is a compiler for building fast web apps using Web Components.

## Building

```bash
git clone https://github.com/ionic-team/stencil-component-starter.git my-component
cd my-component
git remote rm origin
```

and run:

```bash
npm install
npm start
```

To watch for file changes during develop, run:

```bash
npm run dev
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

Need help? Check out our docs [here](https://stenciljs.com/docs/my-first-component).

## Contributing

We’re really happy to accept contributions from the community, that’s the main reason why we open-sourced it! There are many ways to contribute, even if you’re not a technical person.

1. Fork it (<https://github.com/michaelravedoni/at-article/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## Release History

## Roadmap

- `citeproc-js` implementation
- themes implementation

## Authors and acknowledgment

* **Michael Ravedoni** - *Initial work* - [michaelravedoni](https://github.com/michaelravedoni)

See also the list of [contributors](https://github.com/michaelravedoni/at-article/contributors) who participated in this project.

## License

[MIT License](https://opensource.org/licenses/MIT)
