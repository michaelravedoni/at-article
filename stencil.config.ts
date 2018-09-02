import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import * as precss from 'precss';
import * as atImport from 'postcss-import';
import * as pfm  from 'postcss-font-magician';
import * as autoprefixer from 'autoprefixer';
import * as cssnano  from 'cssnano';
import * as postComment from 'postcss-comment';

export const config: Config = {
  namespace: 'at-article',
  bundles: [
    {components: ['at-abstract', 'at-article', 'at-article-content', 'at-reference', 'at-block', 'at-blockquote', 'at-callout', 'at-citation', 'at-control', 'at-figure', 'at-note', 'at-notes', 'at-references', 'at-resume', 'at-summary', 'at-toc']}
  ],
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ],
  plugins: [
    sass(),
    postcss({
      injectGlobalPaths: [
        //'src/globals/variables.css'
      ],
      parser: postComment,
      plugins: [
        atImport(),
        precss(),
        autoprefixer(),
        pfm(),
        cssnano()
      ]
    })
  ]
};
