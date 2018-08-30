---
layout: default
title: at-article
---

>*at-article* is a Web Component collection using Stencil for web-native article writing, usable in any web environment with a clean and flat design.
----

<img src="logo-at-article.png" alt="at-article logo" width="450" style="margin: 0 auto; display: block;"/>

## Quick start
`at-article` is licensed under the MIT license and totally available on GitHub and npm. To use it you can add a script tag in the head of your HTML page from the CDN :

`<script src='https://unpkg.com/at-article@latest/dist/at-article.js'></script>`

or install it into your project with npm:

`npm install at-article --save`

----

Once you have installed it, you can use it. For example, add this to your body page:

```html
<at-block caption="false" heading="Heading" type="info">Lorem ispum...</at-block>
```
and you would get this :

<at-block caption="false" heading="Heading" type="info">Lorem ispum, si post exsudatos labores itinerum longos congestosque adfatim commeatus fiducia vestri ductante barbaricos pagos adventans velut mutato repente consilio ad placidiora deverti.</at-block>

----

Would you want to add a reference and a bibliography? Let's do it!

```html
Lorem ispum<at-reference title="Biological concepts" creator="Albert McAugust" itemType="journalArticle" date="2012" publisher="BioJournal" pages="138-143" volume="4" issue="2" language="en" issn="2334-1984" pmid="2345" doi="10.1007/s00223-003-0070-0"></at-reference> dolor es.
<at-references></at-references>
```

Lorem ispum<at-reference title="Biological concepts" creator="Albert McAugust" itemType="journalArticle" date="2012" publisher="BioJournal" pages="138-143" volume="4" issue="2" language="en" issn="2334-1984" pmid="2345" doi="10.1007/s00223-003-0070-0"></at-reference> dolor es.
<at-references></at-references>

----

## Documentation

Check out the full [documentation](/documentation) to discover more possibilities and a set of magic components.
