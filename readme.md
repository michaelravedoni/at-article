<h1 align="center">at-article</h1> <br>
<p align="center">
    <img alt="at-article logo" title="at-article logo" src="docs/logo-at-article.png" width="300">
</p>
<div align="center">
  <strong>Write clean and flat articles</strong>
</div>
<div align="center">
  Web Component collection using <a href="https://github.com/ionic-team/stencil">Stencil</a> for writing blogs and academics web articles.
</div>

<div align="center">
  <h3>
    <a href="https://michaelravedoni.github.io/at-article/">Website</a>
    <span> | </span>
    <a href="https://michaelravedoni.github.io/at-article/documentation/">Documentation</a>
    <span> | </span>
    <a href="https://michaelravedoni.github.io/at-article/demo/">Demo</a>
    <span> | </span>
    <a href="#contributing">
      Contributing
    </a>
  </h3>
</div>

<div align="center">
  <sub>Built with ❤︎ by
  <a href="https://michael.ravedoni.com/en">Michael Ravedoni</a> and
  <a href="https://github.com/michaelravedoni/at-article/contributors">
    contributors
  </a>
</div>

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Install](#install)
- [Usage](#usage)
- [Building](#building)
- [Contributing](#contributing)
- [Release History](#release-history)
- [Authors and acknowledgment](#authors-and-acknowledgment)

## Introduction
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/michaelravedoni/at-article/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/at-article.svg?style=flat-square)](https://www.npmjs.com/package/at-article)
![npm](https://img.shields.io/npm/dt/at-article.svg?style=flat-square)
![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/at-article.svg?style=flat-square)

## Features

- 12 web-components for web native article writing
- usable in any web environment
- clean and flat design

<div align="center"><img alt="at-article logo" title="at-article animation" src="docs/at-article.gif" width="450"></div>

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
- Add an import to the npm packages `import my-component;`
- Then you can use the element anywhere in your template, JSX, html, etc.

## Usage

Check the documentation for more informations : [Documentation](https://michaelravedoni.github.io/documentation)

**Example with the `at-block` component**

The block element allows to highlight content with a contrasted graphic aspect with the rest of the article.

```html
<at-block caption="true" heading="Heading example" type="info">Lorem ispum</at-block>
```

Property | Default | Explanations
--- | --- | ---
caption | `false` | If `true`, display a numbered caption
heading  |   |  Display a heading
type  | `default` |  The values can be `default`, `info`, `example`, `warning`, `definition` or `fact`


## Build with

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

## v0.0.3
* Components <at-abstract> and <at-summary> added

## v0.0.2
* Hosted documentation
* es5 polyfill

## v0.0.1
* Initial release

## Roadmap

- `citeproc-js` implementation
- themes implementation
- pdf export

## Authors and acknowledgment

* **Michael Ravedoni** - *Initial work* - [michaelravedoni](https://github.com/michaelravedoni)

See also the list of [contributors](https://github.com/michaelravedoni/at-article/contributors) who participated in this project.

## License

[MIT License](https://opensource.org/licenses/MIT)
