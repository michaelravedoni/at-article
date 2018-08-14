exports.config = {
  /*bundles: [
    { components: [''] }
  ],*/
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
