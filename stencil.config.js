exports.config = {
  bundles: [
    { components: ['at-article', 'at-block', 'at-blockquote', 'at-figure', 'at-note', 'at-notes', 'at-reference', 'at-references'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ],
  //globalStyle: 'src/global/variables.css',
  namespace: 'at-article',
  generateDistribution: true,
  //generateWWW: false,
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
